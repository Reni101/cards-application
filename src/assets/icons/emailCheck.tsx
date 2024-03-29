import { SVGProps, Ref, forwardRef, memo } from 'react'
const EmailCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} fill="none" ref={ref} {...props}>
    <path
      fill="#8C61FF"
      fillOpacity={0.1}
      stroke="#BEA6FF"
      d="M95.5 48a47.5 47.5 0 1 1-95 0 47.5 47.5 0 0 1 95 0Z"
    />
    <path
      fill="#BEA6FF"
      d="M77.9 54.5a.7.7 0 0 1-.7-.7v-9.2a.6.6 0 0 1 1.3 0v9.2a.6.6 0 0 1-.6.7Zm0-12.7a.6.6 0 0 1-.7-.7v-1.9a.6.6 0 0 1 1.3 0v2a.6.6 0 0 1-.6.6Zm-52.1-9.3h-3.6a.7.7 0 0 1 0-1.3h3.6a.7.7 0 0 1 0 1.3Z"
    />
    <path
      fill="#BEA6FF"
      d="M24 34.3a.7.7 0 0 1-.7-.7v-3.5a.7.7 0 0 1 1.4 0v3.5c0 .4-.3.7-.7.7Zm12.9 39.4a.9.9 0 1 1 0 1.7.9.9 0 0 1 0-1.7Zm-5.2 0a.9.9 0 1 1 0 1.7.9.9 0 0 1 0-1.7Zm-5.1 0a.9.9 0 1 1 0 1.7.9.9 0 0 1 0-1.7Z"
    />
    <path fill="#333" d="M47.9 23.2 23.8 43l24 19.8L72 43 47.9 23.2Z" />
    <path
      fill="#BEA6FF"
      d="M47.9 63.5c-.2 0-.3 0-.5-.2l-24-19.8a.7.7 0 0 1 0-1l24-19.8a.7.7 0 0 1 1 0l24 19.8a.7.7 0 0 1 .3.5.7.7 0 0 1-.2.5L48.4 63.3a.7.7 0 0 1-.5.2ZM24.9 43l23 19 23-19-23-18.9-23 19Z"
    />
    <path fill="#333" d="M65 28.8H30.7v40.8H65V28.8Z" />
    <path fill="#333" d="m55.4 40.9-11.7 9.6v19H65V41h-9.6Z" />
    <path
      fill="#BEA6FF"
      d="M65 70.3H30.9a.7.7 0 0 1-.7-.7V28.8a.7.7 0 0 1 .7-.7H65a.7.7 0 0 1 .7.7v40.8a.7.7 0 0 1-.7.7Zm-33.6-1.4h33V29.5h-33V69Z"
    />
    <path
      fill="#BEA6FF"
      d="M59 35H48.2a.7.7 0 0 1 0-1.3H59a.7.7 0 0 1 0 1.4Zm-14.5 0h-7.8a.7.7 0 0 1 0-1.3h7.8a.7.7 0 0 1 0 1.4ZM59 39.7h-7.1a.7.7 0 0 1 0-1.4h7a.7.7 0 1 1 0 1.4Zm-10.8 0H36.7a.7.7 0 0 1 0-1.4h11.5a.7.7 0 1 1 0 1.4ZM59 44.3H46.3a.7.7 0 0 1 0-1.4H59a.7.7 0 0 1 0 1.4Zm-16.4 0h-5.9a.7.7 0 0 1 0-1.4h6a.7.7 0 0 1 0 1.4ZM59 49h-6.2a.7.7 0 0 1 0-1.4H59a.7.7 0 1 1 0 1.4Zm-9.9 0H36.7a.7.7 0 0 1 0-1.4h12.4a.7.7 0 1 1 0 1.4Zm4.9 4.6H41.7a.7.7 0 1 1 0-1.4H54a.7.7 0 1 1 0 1.4Z"
    />
    <path fill="#333" d="M23.8 43v26.6l16.1-13.3L23.8 43Zm32 13.3L72 69.6V43L55.8 56.3Z" />
    <path fill="#333" d="m47.9 62.8-8-6.5-16.1 13.3H72L55.8 56.3l-8 6.5Z" />
    <path fill="#333" d="M28.4 50.5v15.3l9.3-7.7-9.3-7.6Zm34.8 7.4L72 65V50.7l-8.8 7.2Z" />
    <path
      fill="#BEA6FF"
      d="M23.8 70.3h-.3a.7.7 0 0 1-.4-.7V43a.7.7 0 0 1 .4-.6.7.7 0 0 1 .7.1l16.2 13.3a.7.7 0 0 1 0 1L24.2 70.2l-.4.2Zm.7-25.8v23.6l14.3-11.8-14.3-11.8Z"
    />
    <path fill="#333" d="m60.4 60.1-10.1 8.3-7.1-5.8-8.5 7H72L60.4 60Z" />
    <path
      fill="#BEA6FF"
      d="M72 70.3c-.2 0-.4 0-.5-.2L55.4 57a.7.7 0 0 1 0-1.1l16.1-13.3a.7.7 0 0 1 .8 0 .7.7 0 0 1 .4.5v26.6a.7.7 0 0 1-.4.6H72Zm-15-14 14.3 11.8V44.5L56.9 56.3Z"
    />
    <path
      fill="#BEA6FF"
      d="M72 70.3H23.8a.7.7 0 0 1-.7-.5.7.7 0 0 1 .2-.8l16.2-13.2a.7.7 0 0 1 .9 0l7.5 6.1 7.5-6.1a.7.7 0 0 1 1 0l16 13.2a.7.7 0 0 1 .3.8.7.7 0 0 1-.7.5Zm-46.3-1.4H70L55.8 57.2l-7.5 6.2a.7.7 0 0 1-1 0l-7.5-6.2L25.7 69Zm20.7 6.5h-3.6a.7.7 0 0 1 0-1.4h3.6a.7.7 0 0 1 0 1.4Z"
    />
    <path
      fill="#BEA6FF"
      d="M44.6 77.1a.7.7 0 0 1-.7-.6v-3.6a.7.7 0 0 1 1.3 0v3.6c0 .3-.3.6-.6.6Z"
    />
  </svg>
)
const ForwardRef = forwardRef(EmailCheck)
const Memo = memo(ForwardRef)

export default Memo
