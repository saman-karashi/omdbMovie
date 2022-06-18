import { ToastContainer } from "react-toastify"

const Layout = ({children}) => {
return (
    <>
     <main className='mt-24 mx-auto container'>
     <ToastContainer
    pauseOnHover={false}
    pauseOnFocusLoss={false}
      />
      {children}
     </main>
    </>
  )
}

export default Layout