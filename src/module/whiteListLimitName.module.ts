import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhiteListLimitName } from "src/entity/whiteListLimitName.entity";
import { WhiteListLimitNameController } from "src/controller/whiteListLimitName.controller";
import { whiteListLimitNameService } from "src/provider/whiteListLimitName.service";

@Module({
    imports: [TypeOrmModule.forFeature([WhiteListLimitName])],
    controllers: [WhiteListLimitNameController],
    providers: [whiteListLimitNameService],
})
export class WhiteListLimitNameModule {}