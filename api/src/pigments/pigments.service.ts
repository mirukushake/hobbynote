import { Injectable } from '@nestjs/common';
import { CreatePigmentDto } from './dto/create-pigment.dto';
import { UpdatePigmentDto } from './dto/update-pigment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { plainToInstance } from 'class-transformer';
import { PigmentEntity } from './entities/pigment.entity';

@Injectable()
export class PigmentsService {
  constructor(private prisma: PrismaService) {}

  create(createPigmentDto: CreatePigmentDto) {
    return 'This action adds a new pigment';
  }

  async findAll() {
    const pigments = await this.prisma.pigment.findMany({
      include: {
        watercolors: {
          include: {
            brand: true,
            pigments: true,
          },
        },
      },
      orderBy: [
        {
          order: 'asc',
        },
      ],
    });

    return plainToInstance(PigmentEntity, pigments);
  }

  async findOne(id: number) {
    const pigment = await this.prisma.pigment.findMany({
      include: {
        watercolors: true,
      },
      orderBy: [
        {
          order: 'asc',
        },
      ],
    });

    return plainToInstance(PigmentEntity, pigment);
  }

  update(id: number, updatePigmentDto: UpdatePigmentDto) {
    return `This action updates a #${id} pigment`;
  }

  remove(id: number) {
    return `This action removes a #${id} pigment`;
  }
}
