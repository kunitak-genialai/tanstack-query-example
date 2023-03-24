//https://www.miracleave.co.jp/contents/1816/front-end-development-msw-mocks/
import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
