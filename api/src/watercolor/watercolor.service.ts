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

  findOne(id: number) {
    return `This action returns a #${id} watercolor`;
  }

  update(id: number, updateWatercolorDto: UpdateWatercolorDto) {
    return `This action updates a #${id} watercolor`;
  }

  remove(id: number) {
    return `This action removes a #${id} watercolor`;
  }
}
