import React from 'react'
import classes from './featuredBlogs.module.css'
import mountainImg1 from '../../assets/mainBlog.jpg'
import mountainImg2 from '../../assets/Image_1.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Популярні пости</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Технології</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 переглядів
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 вподобань
                  </div>
                </div>
                <h4>Революція в Технологіях: Що Нового на Горизонті?</h4>
                <p className={classes.blogDesc}>
                  Дізнайтеся про найсвіжіші технологічні досягнення та тенденції, які змінюють наше повсякденне життя. Від штучного інтелекту до інтернету речей - ми розкажемо вам все!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Автор:</span> Андрій</span>
                  <span><span>Створено:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Інноваційні Проекти: Креативність у Бізнесі</h4>
                <p className={classes.desc}>
                  Вивчайте приклади успішних стартапів та інноваційних проектів, які перетворюють традиційні галузі бізнесу. Як знайти ідеї та впровадити їх у реальному житті?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Автор:</span> Олена</span>
                  <span><span>Створено:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Наука Завтрашнього Дня: Що Ми Можемо Очікувати?</h4>
                <p className={classes.desc}>
                  Ваш вікенд буде цікавішим! Відкрийте для себе останні відкриття в науці та високих технологіях. Від космічних подорожей до геничної модифікації - ми розкажемо вам про все!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Автор:</span> Олексій</span>
                  <span><span>Створено:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs