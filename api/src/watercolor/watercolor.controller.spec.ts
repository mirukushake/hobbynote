import { Test, TestingModule } from '@nestjs/testing';
import { WatercolorController } from './watercolor.controller';
import { WatercolorService } from './watercolor.service';

describe('WatercolorController', () => {
  let controller: WatercolorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatercolorController],
      providers: [WatercolorService],
    }).compile();

    controller = module.get<WatercolorController>(WatercolorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
