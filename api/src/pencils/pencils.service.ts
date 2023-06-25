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
        items: {
          include: {
            inventory: true,
            wishlist: true,
          },
        },
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
      const { items, rgb, ...rest } = pencil;
      return {
        ...rest,
        rgb: rgb['r'] + ',' + rgb['g'] + ',' + rgb['b'],
        inventory: items.inventory ? items.inventory.quantity : null,
        wishlist: items.wishlist ? items.wishlist.quantity : null,
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
        items: {
          include: {
            inventory: true,
            wishlist: true,
          },
        },
      },
    });

    const { items, rgb, ...rest } = pencil;

    const updatedPencil = {
      ...rest,
      rgb: pencil.rgb['r'] + ',' + pencil.rgb['g'] + ',' + pencil.rgb['b'],
      inventory: items.inventory ? items.inventory.quantity : null,
      wishlist: items.wishlist ? items.wishlist.quantity : null,
    };
    return plainToInstance(PencilEntity, updatedPencil);
  }

  update(id: number, updatePencilDto: UpdatePencilDto) {
    return `This action updates a #${id} Pencil`;
  }

  remove(id: number) {
    return `This action removes a #${id} Pencil`;
  }
}
