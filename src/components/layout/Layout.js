import { ToastContainer } from "react-toastify"

const Layout = ({children}) => {
return (
    <>
     <main className='py-24 md:mx-auto md:container'>
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