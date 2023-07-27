import { Typography } from '../../typography'

import { PageButton } from './page-button/pageButton'

type PropsType = {
  paginationRange: Array<string | number>
  currentPage: number
  handleMainPageClicked: (page: number) => () => void
}

export const PageButtonsForRender = (props: PropsType) => {
  return (
    <>
      {props.paginationRange.map((page: number | string, index) => {
        const isSelected = page === props.currentPage

        if (typeof page === 'string') {
          return (
            <Typography variant={'body2'} key={index}>
              ...
            </Typography>
          )
        } else {
          return (
            <PageButton
              isSelected={isSelected}
              page={page}
              handleMainPageClicked={props.handleMainPageClicked(+page)}
              key={index}
            />
          )
        }
      })}
    </>
  )
}
