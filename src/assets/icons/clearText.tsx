import { SVGProps, Ref, forwardRef, memo } from 'react'
const ClearText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m8.94 8 2.87-2.86a.67.67 0 0 0-.95-.95L8 7.06 5.14 4.19a.67.67 0 0 0-.95.95L7.06 8l-2.87 2.86A.67.67 0 0 0 4.67 12a.67.67 0 0 0 .47-.2L8 8.95l2.86 2.87a.67.67 0 1 0 .95-.95L8.94 8Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(ClearText)
const Memo = memo(ForwardRef)

export default Memo
