import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schema/portfolio.schema';
@Injectable()
export class AppService {

  private readonly logger = new Logger("AppService");

  constructor(
    @InjectModel(Portfolio.name)
    private readonly clientPortfolioModel: Model<PortfolioDocument>,
  ) {}


  async getAllClientPortfolio(): Promise<Portfolio[]> {
    return this.clientPortfolioModel.find().exec();
  }

  async getPortfolioById(clienId: string): Promise<Portfolio> {

    const query = { customerCode: clienId };
    const options = {
    };

    this.logger.log(`query : ${JSON.stringify(query)}`);
    try {
      const result = await  this.clientPortfolioModel.findOne(query, options)
      this.logger.log(`result : ${JSON.stringify(result)}`);
      return result  
    } catch (error) {
      this.logger.error(error);
    }
    
  }
}