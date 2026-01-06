import { AccessToken } from '@adonisjs/auth/access_tokens'
import type { infer } from 'astro/zod'


type AcessTokenType=InstanceType<typeof AccessToken>

type ApiResponseType={
	success:boolean,
	status:number,
	token?:ReturnType<AcessTokenType['toJSON']>,
	code?:string,
    message?:string,
    errors?:Record<string,string>,
    inputs?:Record<string,string>

} 