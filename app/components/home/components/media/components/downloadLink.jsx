export const DownloadLink = ({ to, children }) => {
  return (
    <a
      target='_blank'
      href={to}
    >
      {children}
    </a>
  )
}

export default DownloadLink
