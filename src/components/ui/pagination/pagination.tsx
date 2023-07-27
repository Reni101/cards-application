import Arrow from '../../../assets/icons/arrow'
import { Button } from '../button'
import { Select } from '../select-box'
import { Typography } from '../typography'

import { options } from './options-select'
import { PageButtonsForRender } from './page-buttons-for-render/page-buttons-for-render'
import s from './pagination.module.scss'
import { usePagination } from './usePagination'

type PropsType = {
  currentPage: number
  rowsValue: string
  pageCount: number
  changePage: (page: number) => void
  changeRows: (rows: string) => void
}

export const Pagination = (props: PropsType) => {
  const onChange = (pageNumber: number) => {
    props.changePage(pageNumber)
  }

  const {
    isFirstPage,
    isLastPage,
    paginationRange,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    count: props.pageCount,
    page: props.currentPage,
    onChange,
  })

  return (
    <div className={s.container}>
      <Button onClick={handlePreviousPageClicked} className={s.arrowButton} disabled={isFirstPage}>
        <Arrow />
      </Button>

      <PageButtonsForRender
        paginationRange={paginationRange}
        currentPage={props.currentPage}
        handleMainPageClicked={handleMainPageClicked}
      />

      <Button onClick={handleNextPageClicked} className={s.arrowButton} disabled={isLastPage}>
        <Arrow />
      </Button>

      <Typography as={'div'} variant={'body2'} className={s.selectContainer}>
        Показать
        <Select
          className={s.selectBox}
          options={options}
          value={props.rowsValue}
          onValueChange={props.changeRows}
        />
        на странице
      </Typography>
    </div>
  )
}
