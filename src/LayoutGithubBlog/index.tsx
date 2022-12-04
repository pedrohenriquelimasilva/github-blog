import { Header } from "../components/Header";
import { Outlet } from 'react-router-dom'

export function LayoutGithubBlog(){
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}