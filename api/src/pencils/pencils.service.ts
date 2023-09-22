import {
  Injectable,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePencilDto } from './dto/create-pencil.dto';
import { UpdatePencilDto } from './dto/update-pencil.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PencilEntity } from './entities/pencil.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PencilsService {
  constructor(private prisma: PrismaService) {}

  create(createPencilDto: CreatePencilDto) {
    return 'This action adds a new Pencil';
  }

  async findAll() {
    const pencils = await this.prisma.pencil.findMany({
      include: {
        brand: true,
        color: true,
        series: true,
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

    return plainToInstance(PencilEntity, pencils);
  }

  async findOne(item_id: number) {
    const pencil = await this.prisma.pencil.findUnique({
      where: { item_id },
      include: {
        brand: true,
        color: true,
      },
    });

    return plainToInstance(PencilEntity, pencil);
  }

  async update(item_id: number, updatePencilDto: UpdatePencilDto) {
    try {
      console.log(updatePencilDto);

      const pencil = await this.prisma.pencil.update({
        where: { item_id: item_id },
        data: updatePencilDto,
        include: {
          brand: true,
          color: true,
        },
      });

      return plainToInstance(PencilEntity, pencil);
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

    const deletePencil = this.prisma.pencil.delete({
      where: {
        item_id: item_id,
      },
    });

    const transaction = await this.prisma.$transaction([
      deleteItem,
      deletePencil,
    ]);

    return transaction;
  }
}
