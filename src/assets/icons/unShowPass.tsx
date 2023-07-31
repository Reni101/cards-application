import { SVGProps, Ref, forwardRef, memo } from 'react'
const UnShowPass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M21.9 11.5c-.7-1.1-4.2-6.7-10.2-6.5-5.5.1-8.7 5-9.6 6.5a1 1 0 0 0 0 1c.7 1 4 6.5 10 6.5h.2c5.5-.1 8.7-5 9.6-6.5a1 1 0 0 0 0-1Zm-9.9 4a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(UnShowPass)
const Memo = memo(ForwardRef)

export default Memo
