import { Test, TestingModule } from '@nestjs/testing';
import { EmbroideryDesignService } from './embroidery-design.service';

describe('EmbroideryDesignService', () => {
  let service: EmbroideryDesignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbroideryDesignService],
    }).compile();

    service = module.get<EmbroideryDesignService>(EmbroideryDesignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
