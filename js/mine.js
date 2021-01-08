let rowdata = document.getElementById("rowdata")
let searchWrod = document.getElementById("searc_by_word")
let search = document.getElementById("search")
let searchdata = document.getElementById("searchdata")
let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44'
let username = document.getElementById("username")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let age = document.getElementById("age")
let password = document.getElementById("passwrod")
let repassword = document.getElementById("repassword")
let menu = document.getElementById("menu")
let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let item4 = document.getElementById('item4')
let item5 = document.getElementById('item5')
let item6 = document.getElementById('item6')
let ContactUs = document.getElementById('ContactUs')
let contact = document.getElementById("Contact")
let btn = document.getElementById("btn");


// let leftnav = document.getElementById("leftnav")

let results
async function urls(url) {
    let Response = await fetch(url)
    let url_json = await Response.json()
    results = url_json.results
    viewdata(results)    
};
urls(url)
function viewdata(results){
    var film = ``
    for(let i = 0;i<results.length;i++){
        film +=`
        <div class="col-md-6 col-lg-4 my-3 shadow">
                        <div class="film shadow rounded position-relative">
                            <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" class="img-fluid rounded">
                            <div class="layer d-flex align-items-center">
                                <div class="text-center">
                                    <h2>${results[i].original_title}</h2>
                                    <p>${results[i].overview}</p>
                                    <p>rate: ${results[i].vote_average}</p>
                                    <p>${results[i].release_date}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
        `
    }
    rowdata.innerHTML = film
}

searchWrod.addEventListener('keyup',async function(){
    let val= searchWrod.value
    url = `https://api.themoviedb.org/3/search/multi?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&query=${val}`
    urls(url)
})
item1.addEventListener('click',async function(){
    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    urls(url)
})
item2.addEventListener('click',async function(){
    url = `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    urls(url)
})
item3.addEventListener('click',async function(){
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    urls(url)
})
item4.addEventListener('click',async function(){
    url = `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    urls(url)
})
item5.addEventListener('click',async function(){
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    urls(url)
})
item6.addEventListener('click',async function(){
    window.location = '#ContactUs'
})
search.addEventListener('keyup',function(){
    search_val = search.value
    let searchd = ''
    for(var i=0;i<results.length;i++){
        console.log(results[i])

        console.log(results[i].original_title)
        // console.log(results[i].original_title.toLowerCase().trim())

        if (results[i].original_title.toLowerCase().trim().includes(search_val.toLowerCase().trim())){
            searchd +=`
        <div class="col-md-4 my-3 shadow">
                        <div class="film shadow rounded position-relative">
                            <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" class="img-fluid rounded">
                            <div class="layer d-flex align-items-center">
                                <div class="text-center">
                                    <h2>${results[i].original_title}</h2>
                                    <p>${results[i].overview}</p>
                                    <p>rate: ${results[i].vote_average}</p>
                                    <p>${results[i].release_date}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
        `
    searchdata.innerHTML = searchd
        }
    }
})
function userNAME(){
    let user = username.value
    var re = /([A-Z][a-z0-9]{1,13})/
    if(re.test(user)){
        $(alertname).css('display',"none")
        return true
    }
    else{
        $(alertname).css('display',"block")
        return false
    }
    
}
function useremail(){
    let email1 = email.value
    var re = /([A-z0-9]+@[A-z0-9]+\.(com|net|org))/
    if(re.test(email1)){
        $(alertemail).css('display',"none")
        return true
    }
    else{
        $(alertemail).css('display',"block")
        return false
    }
}
function userphone(){
    let phone1 = phone.value
    var re = /^(010|012|015|011)[0-9]{8}$/
    if(re.test(phone1)){
        $(alertphone).css('display',"none")
        return true
    }
    else{
        $(alertphone).css('display',"block")
        return false
    }
}
function userage(){
    let age1 = age.value
    var re = /^[0-9]{2}$/
    if(re.test(age1)){
        $(alertage).css('display',"none")
        return true
    }
    else{
        $(alertage).css('display',"block")
        return false
    }
}
function userpassword(){
    let password1 = password.value
    var re = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
    if(re.test(password1)){
        $(alertpassword).css('display',"none")
        return true
    }
    else{
        $(alertpassword).css('display',"block")
        return false
    }
}
function userrepassword(){
    let repassword1 = repassword.value
    let password1 = password.value
    if(repassword1 == password1){
        $(alertrepassword).css('display',"none")
        return true
        
    }
    else{
        $(alertrepassword).css('display',"block")
        return false
    }
}

username.addEventListener('keyup',userNAME)
email.addEventListener('keyup',useremail)
phone.addEventListener('keyup',userphone)
age.addEventListener('keyup',userage)
password.addEventListener('keyup',userpassword)
repassword.addEventListener('keyup',userrepassword)

contact.addEventListener("keyup",function(){
    if(userNAME()&&useremail()&&userphone()&&userage()&&userpassword()&&userrepassword()) { 
       btn.disabled = false;
       console.log("False")
      
    }
    else{
        btn.disabled = true;
        console.log("True")
        
    }   
})

// $(btn).removeAttr('disabled')

menu.addEventListener('click',function(){
    let navwidrh= $(leftnav).innerWidth()
    if ($(sidenav).css('left') == '0px'){
        $(menu).removeClass('fas fa-times').addClass('fa fa-align-justify')
        $('.sidenav').css('left',-navwidrh+20)
        // $('.leftnav ul').removeClass('open-menu')
        // $('.leftnav ul').addClass('close-menu')
        $('.leftnav ul li').animate({
            opacity:'0',
            paddingTop:'400px'
        },100)
    }
    else{
        $('.sidenav').css('left',0)
        $('.leftnav ul').removeClass('close-menu')
        $('.leftnav ul').addClass('open-menu')
        $(menu).removeClass('fa fa-align-justify').addClass('fas fa-times')
        $('.leftnav ul').animate({
            opacity:'1',
            paddingTop:'0px'
        },500)
        $('.leftnav ul .item1').animate({
            opacity:'1',
            paddingTop:'25px'
        },1100)
        $('.leftnav ul .item2').animate({
            opacity:'1',
            paddingTop:'25px'
        },1200)
        $('.leftnav ul .item3').animate({
            opacity:'1',
            paddingTop:'25px'
        },1300)
        $('.leftnav ul .item4').animate({
            opacity:'1',
            paddingTop:'25px'
        },1400)
        $('.leftnav ul .item5').animate({
            opacity:'1',
            paddingTop:'25px'
        },1500)
        $('.leftnav ul .item6').animate({
            opacity:'1',
            paddingTop:'25px'
        },1600)
    }
})
// })
// menu.addEventListener('click',function(){
//     let navwidrh= $(leftnav).outerWidth()
//     console.log(navwidrh)
//     $(sidenav).animate({

//         left:navwidrh - 240
//       },500)
//         console.log(navwidrh)
//     })
    


