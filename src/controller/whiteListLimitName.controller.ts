import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { WhiteListLimitNameInterface, whiteListLimitNameService } from "src/provider/whiteListLimitName.service";

interface CreateWhiteListLimitNameDto {
    limitname: string,
    cpname: string,
}

@Controller('whiteListLimitName')
export class WhiteListLimitNameController {
    constructor(private whiteListLimitNameService: whiteListLimitNameService) { }

    @Post()
    async create(@Body() createWhiteListLimitNameDto: CreateWhiteListLimitNameDto) {
        const whiteListLimitName = await this.whiteListLimitNameService.create(createWhiteListLimitNameDto);
        if (!whiteListLimitName) {
            return 'error in creating whitelistlimitname'
        }
        return 'white list limit name created successfully'

    }
}