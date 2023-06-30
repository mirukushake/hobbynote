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

  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    const pencils = await this.prisma.pencil.findMany({
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

    const flatPencil = pencils.map((pencil) => {
      const { rgb, ...rest } = pencil;
      return {
        ...rest,
        rgb: rgb['r'] + ',' + rgb['g'] + ',' + rgb['b'],
      };
    });

    return plainToInstance(PencilEntity, flatPencil);
  }

  async findOne(item_id: number) {
    const pencil = await this.prisma.pencil.findUnique({
      where: { item_id },
      include: {
        brand: true,
        color: true,
      },
    });

    const { rgb, ...rest } = pencil;

    const updatedPencil = {
      ...rest,
      rgb: pencil.rgb['r'] + ',' + pencil.rgb['g'] + ',' + pencil.rgb['b'],
    };
    return plainToInstance(PencilEntity, updatedPencil);
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

      console.log(pencil);

      const { rgb, ...rest } = pencil;

      const updatedPencil = {
        ...rest,
        rgb: pencil.rgb['r'] + ',' + pencil.rgb['g'] + ',' + pencil.rgb['b'],
      };
      return plainToInstance(PencilEntity, updatedPencil);
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} Pencil`;
  }
}
