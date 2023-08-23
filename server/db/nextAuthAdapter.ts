import { MikroOrmAdapter } from '@auth/mikro-orm-adapter'
import { getOrmConfig } from './ormConfig'

export const nextAuthAdapter = MikroOrmAdapter(getOrmConfig())
