import { Resolver, Query, Args} from '@nestjs/graphql';
import { InputType, Field } from '@nestjs/graphql';
import { Portfolio } from './schema/portfolio.schema';
import { AppService } from './app.service';




@InputType()
export class ClientPortfolioInput {

  @Field()
  channel: string;

  @Field()
  country: string;
}


@Resolver((of) => Portfolio)
export class AppResolver {
  constructor(private readonly portfolioService: AppService) {}

  @Query(() => [Portfolio])
  async clientsPortfolio(): Promise<Portfolio[]> {
    return this.portfolioService.getAllClientPortfolio();
  }




  @Query(() => Portfolio)
  async getPorfolioById(@Args('id') id: string): Promise<Portfolio> {


    console.log("id ", id);
    return this.portfolioService.getPortfolioById(id);
  }

}