import { Test, TestingModule } from '@nestjs/testing';
import { WatercolorService } from './watercolor.service';

describe('WatercolorService', () => {
  let service: WatercolorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatercolorService],
    }).compile();

    service = module.get<WatercolorService>(WatercolorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
