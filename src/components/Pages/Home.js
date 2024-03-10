import React from 'react'
import CarosuelSlider from '../CarosuelSlider'
import ShopOur from '../ShopOur'
import BestDeal from '../BestDeal'
import Choosebybrand from '../Choosebybrand'
import GetUpTo from '../GetUpTo'
import Allproducthere from '../Allproducthere'
import MostSelling from '../MostSelling'
import TrendingProducts from '../TrendingProducts'




const Home = () => {
  return (
    <div>
      <CarosuelSlider />
      <section className='shop_our_top_categories mt-5'>
        <div className='container pt-3'>
          <div className='row'>
            <div className='head pb-3'>
              <h1>Shop Our Top Categories</h1>
            </div>
            <ShopOur />
          </div>
        </div>
      </section>
      <section className='Today_best_Deals_for_you'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='head pb-3'>
              <h1>Todays Best Deals For You!</h1>
            </div>
            <BestDeal />
          </div>
        </div>
      </section>
      <section className='Choose_by_brand'>
        <div className='container mt-4 pt-3'>
          <div className='row'>
            <div className='head pb-3'>
              <h1>Choose by Brand</h1>
            </div>

            <Choosebybrand />


          </div>
        </div>
      </section>
      <section className='Get_up_to'>
        <div className='container mt-4 pt-5'>
          <div className='row'>
            <div className='head pb-3'>
              <h1>Get Up To 70% off</h1>
            </div>

            <GetUpTo />


          </div>
        </div>
      </section>


      <section className='banner_inner_here position-relative d-flex justify-content-center align-items-center'>
        <img src='/img/bs.png' alt='title' style={{ width: "100%" }} />
        <div className='green_bannerinner_background position-absolute top-50 end-0 translate-middle-y p-5 pr-3' style={{ objectFit: "cover", marginRight: "53px;" }}>
          <div>
            <h1>Get 5% Cash Back <br /> On $200</h1>
            <p>Shopping is a bit of a relaxing hobby for me, <br /> which is sometimes troubling for the bank balance.</p>
            <button className='btn_class'>Learn More</button>
          </div>

        </div>
      </section>





      <section className='Product_detail_here'>
        <div className='container pt-3'>
          <div className='row'>
            <div className='head pb-3'>
              <h1>Today Best Deals For You!</h1>
            </div>
            <Allproducthere />


          </div>
        </div>

      </section>


      <section>
        <div className='cash_back_jumbotron py-5' style={{ background: "#FFE6CC" }}>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 col-12'>
                <h2 style={{ fontSize: "55px", fontWeight: "bold" }}>Get 5% Cash Back</h2>
                <h5>on Shopcart.com</h5>
                <button className='btn_green_class mt-4'>Learn More</button>
              </div>
              <div className='col-lg-6 col-md-6 col-12'>
                <img src='/img/card.png' className='img-fluid mt-sm-4' />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='Most_Selling_Products'>
          <div className='container pt-3'>
            <div className='row'>
              <div className='head pb-3'>
                <h1>Most Selling Products</h1>
                <MostSelling />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Trending_Products_For_You!'>
      <div className='container pt-3'>
            <div className='row'>
              <div className='head pb-3'>
                <h1>Trending Products For You</h1>
                <TrendingProducts/>
              </div>
            </div>
          </div>
      </section>

    </div>
  )
}

export default Home
