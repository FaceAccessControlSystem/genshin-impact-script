import watch from 'fire-keeper/dist/watch'
import { debounce } from 'lodash'
import beep from 'node-beep'

import build from './build'

// function

const build2 = debounce(async () => {
  await build()
  beep()
}, 5e3)

const main = () => {
  process.on('uncaughtException', (e) => console.error(e))
  watch(
    ['./source/*.coffee', '!./source/index.coffee', '!./source/misc.coffee'],
    build2,
  )
}

// export
export default main
