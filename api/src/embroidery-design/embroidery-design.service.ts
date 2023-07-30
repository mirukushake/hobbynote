import {
  Injectable,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateEmbroideryDesignDto } from './dto/create-embroidery-design.dto';
import { UpdateEmbroideryDesignDto } from './dto/update-embroidery-design.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DesignEntity } from './entities/embroidery-design.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class EmbroideryDesignService {
  constructor(private prisma: PrismaService) {}

  async create(files, createEmbroideryDesignDto: CreateEmbroideryDesignDto) {
    const design = await this.prisma.embroideryDesign.create({
      data: {
        title: createEmbroideryDesignDto.title,
        finished_image: files.finishedimage
          ? files.finishedimage[0].filename
          : null,
        pattern_image: files.designimage ? files.designimage[0].filename : null,
        book_title: createEmbroideryDesignDto.booktitle,
        website_url: createEmbroideryDesignDto.websiteurl,
        notes: createEmbroideryDesignDto.notes,
        status_id: parseInt(createEmbroideryDesignDto.status_id) || null,
        floss: {
          connect: JSON.parse(createEmbroideryDesignDto.floss).map(
            (record) => ({
              item_id: record.value,
            }),
          ),
        },
      },
      include: {
        floss: true,
      },
    });

    if (design) {
      const list = await this.prisma.embroideryDesign.findMany({
        include: {
          status: true,
          floss: {
            include: {
              brand: true,
            },
          },
        },
      });
      return list;
    }
  }

  async findAll() {
    const designs = await this.prisma.embroideryDesign.findMany({
      include: { status: true, floss: { include: { brand: true } } },
    });

    return plainToInstance(DesignEntity, designs, {
      enableImplicitConversion: true,
    });
  }

  async findOne(id: number) {
    const design = await this.prisma.embroideryDesign.findUnique({
      where: { id },
      include: { status: true, floss: { include: { brand: true } } },
    });

    return plainToInstance(DesignEntity, design);
  }

  update(id: number, updateEmbroideryDesignDto: UpdateEmbroideryDesignDto) {
    return `This action updates a #${id} embroideryDesign`;
  }

  remove(id: number) {
    return `This action removes a #${id} embroideryDesign`;
  }
}
