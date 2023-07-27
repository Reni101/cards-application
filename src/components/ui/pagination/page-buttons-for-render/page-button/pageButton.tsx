import { Button } from '../../../button'

import s from './pageButton.module.scss'

type PropsType = {
  isSelected: boolean
  page: number
  handleMainPageClicked: () => void
}

export const PageButton = ({ isSelected, page, handleMainPageClicked }: PropsType) => {
  return (
    <Button
      className={`${s.pageButton} ${isSelected && s.selected}`}
      onClick={handleMainPageClicked}
    >
      {page}
    </Button>
  )
}
