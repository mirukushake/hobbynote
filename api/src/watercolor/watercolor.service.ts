import { Injectable } from '@nestjs/common';
import { CreateWatercolorDto } from './dto/create-watercolor.dto';
import { UpdateWatercolorDto } from './dto/update-watercolor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { WatercolorEntity } from './entities/watercolor.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class WatercolorService {
  constructor(private prisma: PrismaService) {}

  create(createWatercolorDto: CreateWatercolorDto) {
    return 'This action adds a new watercolor';
  }

  async findAll() {
    const watercolors = await this.prisma.watercolor.findMany({
      include: {
        brand: true,
        pigments: true,
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

    return plainToInstance(WatercolorEntity, watercolors);
  }

  async findOne(item_id: number) {
    const watercolor = await this.prisma.watercolor.findUnique({
      where: { item_id },
      include: {
        brand: true,
        pigments: true,
        color: true,
      },
    });

    return plainToInstance(WatercolorEntity, watercolor);
  }

  async update(item_id: number, updateWatercolorDto: UpdateWatercolorDto) {
    try {
      const watercolor = await this.prisma.watercolor.update({
        where: { item_id: item_id },
        data: {
          inv_qty: updateWatercolorDto.inv_qty,
          wish_qty: updateWatercolorDto.wish_qty,
          pigments: updateWatercolorDto.pigments && {
            set: [],
            connect: updateWatercolorDto.pigments.map((record) => ({
              id: record,
            })),
          },
        },
        include: {
          brand: true,
          pigments: true,
          color: true,
        },
      });

      return plainToInstance(WatercolorEntity, watercolor);
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} watercolor`;
  }
}
