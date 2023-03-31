import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WhiteListLimitName } from "src/entity/whiteListLimitName.entity";
import { Repository } from 'typeorm';

export interface WhiteListLimitNameInterface {
    limitname: string,
    cpname: string,
}

@Injectable()
export class whiteListLimitNameService {
    constructor(
        @InjectRepository(WhiteListLimitName)
        private whiteListLimitNameRepository: Repository<WhiteListLimitNameInterface>,
    ) {}

    create(whiteListLimitName: WhiteListLimitNameInterface): Promise<WhiteListLimitNameInterface> {
    return this.whiteListLimitNameRepository.save(
        this.whiteListLimitNameRepository.create(whiteListLimitName)
    )
    }
}
