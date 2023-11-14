import httpInstance from "@/utils/http"

export function getCategroyAPI(){
return httpInstance({
    url:'/home/category/head'
})
}