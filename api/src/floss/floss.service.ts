import {
  Injectable,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { CreateFlossDto } from './dto/create-floss.dto';
import { UpdateFlossDto } from './dto/update-floss.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlossEntity } from './entities/floss.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class FlossService {
  constructor(private prisma: PrismaService) {}

  create(createFlossDto: CreateFlossDto) {
    return 'This action adds a new floss';
  }

  async findAll() {
    const floss = await this.prisma.floss.findMany({
      include: {
        brand: true,
        color: true,
      },
      orderBy: [
        {
          brand_id: 'desc',
        },
        {
          order: 'asc',
        },
      ],
    });

    return plainToInstance(FlossEntity, floss);
  }

  async findOne(item_id: number) {
    const floss = await this.prisma.floss.findUnique({
      where: { item_id },
      include: {
        brand: true,
        color: true,
      },
    });

    return plainToInstance(FlossEntity, floss);
  }

  async update(item_id: number, updateFlossDto: UpdateFlossDto) {
    try {
      console.log(updateFlossDto);

      const floss = await this.prisma.floss.update({
        where: { item_id: item_id },
        data: updateFlossDto,
        include: {
          brand: true,
          color: true,
        },
      });

      return plainToInstance(FlossEntity, floss);
    } catch (err) {
      console.log(err);
    }
  }

  async remove(item_id: number) {
    const deleteItem = this.prisma.item.delete({
      where: {
        id: item_id,
      },
    });

    const deleteFloss = this.prisma.floss.delete({
      where: {
        item_id: item_id,
      },
    });

    const transaction = await this.prisma.$transaction([
      deleteItem,
      deleteFloss,
    ]);

    return transaction;
  }
}
