import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export class News extends Component {
  articlesArray = [
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Proud Boys leader Tarrio charged with sedition for role in U.S. Capitol attack - Reuters.com',
      description:
        "The former leader of the right-wing group the Proud Boys, Enrique Tarrio, and four associates were charged with seditious conspiracy on Monday for their role in the Jan. 6, 2021, attack on the U.S. Capitol by Donald Trump's supporters.",
      url:
        'https://www.reuters.com/world/us/proud-boys-leader-tarrio-indicted-us-seditious-conspiracy-charge-2022-06-06/',
      urlToImage:
        'https://www.reuters.com/resizer/C5xkoBSyBM9GgRXNHiLc0NUyyi0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z5HMU3RYBZIL5IP3JYSCILAUC4.jpg',
      publishedAt: '2022-06-07T08:21:00Z',
      content:
        'WASHINGTON, June 6 (Reuters) - The former leader of the right-wing group the Proud Boys, Enrique Tarrio, and four associates were charged with seditious conspiracy on Monday for their role in the Jan… [+3838 chars]',
    },
    {
      source: {
        id: null,
        name: 'New York Times',
      },
      author: 'Eduardo Medina',
      title:
        'Mother Charged With Manslaughter After 2-Year-Old Fatally Shoots Father - The New York Times',
      description:
        'It is unclear how the boy managed to get the Glock 19, but his mother acknowledged that “any child in the room could have figured out how to get the gun out of the bag,” the authorities said.',
      url:
        'https://www.nytimes.com/2022/06/06/us/boy-shoots-father-florida.html',
      urlToImage:
        'https://static01.nyt.com/images/2022/06/06/multimedia/06xp-shooting/06xp-shooting-facebookJumbo.jpg',
      publishedAt: '2022-06-07T08:01:00Z',
      content:
        'But then Ms. Ayala told them that it was their toddler who had fired the weapon, Sheriff Mina said. The family had heard a loud pop, prompting Ms. Ayala to get up from the bed and find her husband bl… [+1371 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Exclusive: Michigan widens probe into voting system breaches by Trump allies - Reuters.com',
      description:
        'State police in Michigan have obtained warrants to seize voting equipment and election-related records in at least three towns and one county in the past six weeks, police records show, widening the largest known investigation into unauthorized attempts by al…',
      url:
        'https://www.reuters.com/world/us/exclusive-michigan-widens-probe-into-voting-system-breaches-by-trump-allies-2022-06-06/',
      urlToImage:
        'https://www.reuters.com/resizer/vOqS1kWuRfQO7YtMJadIIkCo0CA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q3VHU5FIGJIJFP5J7CJ7EPZWRY.jpg',
      publishedAt: '2022-06-07T07:52:00Z',
      content:
        'LANSING, Michigan, June 6 (Reuters) - State police in Michigan have obtained warrants to seize voting equipment and election-related records in at least three towns and one county in the past six wee… [+9672 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Tara John, Ivana Kottasová, Rob Picheta and Luke McGee, CNN',
      title:
        'British Prime Minister Boris Johnson squeaks through confidence vote but faces battle for survival - CNN',
      description:
        'UK Prime Minister Boris Johnson has survived a confidence vote by members of his own party -- but the final count of lawmakers who rebelled against him was far higher than his supporters expected.',
      url:
        'https://www.cnn.com/2022/06/06/uk/boris-johnson-vote-of-confidence-uk-prime-minister-intl/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/220606031800-01-boris-johnson-060622-file-super-tease.jpg',
      publishedAt: '2022-06-07T06:00:00Z',
      content:
        'London (CNN)UK Prime Minister Boris Johnson has survived a confidence vote by members of his own party -- but the final count of lawmakers who rebelled against him was far higher than his supporters … [+4163 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Amazon stock split may draw retail traders in tough market - Reuters.com',
      description:
        'Amazon\'s <a href="https://www.reuters.com/companies/AMZN.O" target="_blank">(AMZN.O)</a> stock split may provide some solace to shareholders who have seen the e-commerce giant\'s shares battered this year.',
      url:
        'https://www.reuters.com/markets/europe/amazon-stock-split-may-draw-retail-traders-tough-market-2022-06-06/',
      urlToImage:
        'https://www.reuters.com/resizer/tuyRpBbSu3iEaI8EfCw_M6TNQUA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QMBDMQ4LNBNOLDWRCO45EFNTXA.jpg',
      publishedAt: '2022-06-07T04:59:00Z',
      content:
        "NEW YORK, June 6 (Reuters) - Amazon's (AMZN.O) stock split may provide some solace to shareholders who have seen the e-commerce giant's shares battered this year.\r\nAmazon shares were up 3.1% to $126.… [+4149 chars]",
    },
    {
      source: {
        id: null,
        name: 'Variety',
      },
      author: 'J. Kim Murphy',
      title:
        '‘Jurassic World: Dominion’ Draws Mixed First Reactions, From ‘Roaring Fun’ to ‘Overindulgent and Pointless’ - Variety',
      description:
        'The North American premiere of “Jurassic World: Dominion” has officially concluded in Los Angeles and first reactions to the dino-centric sequel are pouring in online, with entertainment writers calling the follow-up everything from a good hit of nostalgia to…',
      url:
        'https://variety.com/2022/film/news/jurassic-world-dominion-first-reactions-1235286317/',
      urlToImage:
        'https://variety.com/wp-content/uploads/2022/06/dominion.jpg?w=999',
      publishedAt: '2022-06-07T04:36:00Z',
      content:
        'The North American premiere of “Jurassic World: Dominion” has officially concluded in Los Angeles and first reactions to the dino-centric sequel are pouring in online, with entertainment writers call… [+6169 chars]',
    },
    {
      source: {
        id: null,
        name: 'SciTechDaily',
      },
      author: null,
      title:
        'Astrophysicists Create “Time Machine” Simulations To Observe the Lifecycle of Ancestor Galaxy Cities - SciTechDaily',
      description:
        'Many processes in astrophysics take a very long time, making their evolution tricky to study. For example, a star like our sun has a lifespan of about 10 billion years and galaxies evolve over the course of billions of years. One way astrophysicists deal with…',
      url:
        'https://scitechdaily.com/astrophysicists-create-time-machine-simulations-to-observe-the-lifecycle-of-ancestor-galaxy-cities/',
      urlToImage:
        'https://scitechdaily.com/images/Time-Machine-Simulations.jpg',
      publishedAt: '2022-06-07T04:16:10Z',
      content:
        'Scientists create time machine simulations studying the lifecycle of ancestor galaxy cities.\r\nMany processes in astrophysics take a very long time, making their evolution tricky to study. For example… [+4866 chars]',
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title: 'Two Versions Of Monkeypox Are Circulating',
      description:
        'Concerns are growing over the monkeypox virus in the U.S. as the CDC is now saying the cases appear to be coming from two different outbreaks. NBC News Steve...',
      url: 'https://www.youtube.com/watch?v=NroMrpGm3sw',
      urlToImage: 'https://i.ytimg.com/vi/NroMrpGm3sw/maxresdefault.jpg',
      publishedAt: '2022-06-07T03:30:03Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        'Musk threatens to cancel the Twitter deal as he demands data on fake accounts | World English News - WION',
      description:
        'Billionaire Elon Musk has threatened to cancel the Twitter deal if his demand for data about fake accounts is not fulfilled by the social media giant.#ElonMu...',
      url: 'https://www.youtube.com/watch?v=htaCOehkuik',
      urlToImage: 'https://i.ytimg.com/vi/htaCOehkuik/maxresdefault.jpg',
      publishedAt: '2022-06-07T03:15:02Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        "'Tumors just vanished': Cancer patients now in remission after drug trial - CNN",
      description:
        'Treatment with the immunotherapy dostarlimab showed promising results in a small trial of more than a dozen rectal cancer patients, according to new research...',
      url: 'https://www.youtube.com/watch?v=a0rbO3pnqDI',
      urlToImage: 'https://i.ytimg.com/vi/a0rbO3pnqDI/hqdefault.jpg',
      publishedAt: '2022-06-07T03:09:30Z',
      content: null,
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Kelly McCleary, Emma Tucker',
      title:
        '2 arrested after Philadelphia shooting left 3 people dead and 11 wounded, officials say - CNN',
      description:
        "A night of revelry on Philadelphia's South Street turned chaotic Saturday as gunmen opened fire into a crowd, leaving two people and a suspect dead and 11 wounded in one of at least 13 weekend mass shootings across the United States.",
      url:
        'https://www.cnn.com/2022/06/06/us/philadelphia-south-street-shooting-monday/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/220605171935-06-south-philadelphia-shooting-0506.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2022-06-07T02:57:00Z',
      content:
        'A night of revelry on Philadelphias South Street turned chaotic Saturday as gunmen opened fire into a crowd, leaving two people and a suspect dead and 11 wounded in one of at least 13 weekend mass sh… [+6663 chars]',
    },
    {
      source: {
        id: 'usa-today',
        name: 'USA Today',
      },
      author: 'Laura Daniella Sepulveda, USA TODAY',
      title:
        'Tempe police officers on leave after watching a man drown in lake - USA TODAY',
      description:
        'Sean Bickings, 34, begged officers for help as they stood by and told him they were not "jumping in after you," according to a transcript of footage.',
      url:
        'https://www.usatoday.com/story/news/nation/2022/06/06/tempe-arizona-lake-sean-bickings-drowning-police-officers/7539811001/',
      urlToImage:
        'https://www.gannett-cdn.com/presto/2022/06/06/PPHX/27ca7cf3-a21f-4561-99d5-3c354e0e07d7-IMG_0764.JPG?auto=webp&crop=2447,1377,x0,y326&format=pjpg&width=1200',
      publishedAt: '2022-06-07T02:44:55Z',
      content:
        'PHOENIX —  Three police officers in Arizona are on administrative leave amid a probe into their response after a man jumped into a lake and drowned last month despite repeated pleas for help, newly r… [+3326 chars]',
    },
    {
      source: {
        id: null,
        name: 'Yahoo Entertainment',
      },
      author: 'Jason Owens',
      title:
        'NCAA tournament umpire pushes East Carolina batter out of box as he admires home run - Yahoo Sports',
      description:
        "Baseball's unwritten rules tend to be enforced by opposing teams. Every once in a while, an umpire gets involved.",
      url:
        'https://sports.yahoo.com/ncaa-umpire-shoves-east-carolina-batter-out-of-box-as-he-admired-home-run-022520664.html',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/xMIBJkoJvvqux_KHrJDJdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2022-06/6391c5a0-e607-11ec-9fd7-9eb6fa75bbf8',
      publishedAt: '2022-06-07T02:25:00Z',
      content:
        "Baseball's unwritten rules tend to be enforced by opposing teams.\r\nEvery once in a while, an umpire gets involved.\r\nCase in point: Monday's Greenville Regional NCAA tournament game. With a spot again… [+1435 chars]",
    },
    {
      source: {
        id: null,
        name: 'Express',
      },
      author: 'Catherine Meyer-Funnell',
      title:
        "Lilibet's wishlist: Meghan and Harry wanted £75 present to mark 'milestone birthday' - Express",
      description:
        "MEGHAN MARKLE and Prince Harry marked their daughter Lilibet's first birthday with a family party at Frogmore Cottage and the couple wanted a very special gift to mark the occasion, reports state.",
      url:
        'https://www.express.co.uk/news/royal/1621695/lilibet-meghan-markle-prince-harry-milestone-birthday-platinum-jubilee-ont',
      urlToImage:
        'https://cdn.images.express.co.uk/img/dynamic/106/1200x712/1621695_1.jpg',
      publishedAt: '2022-06-07T02:21:49Z',
      content: null,
    },
    {
      source: {
        id: 'the-washington-post',
        name: 'The Washington Post',
      },
      author: 'Cleve R. Wootson Jr.',
      title:
        "Mexico's president snubs Biden invitation to summit - The Washington Post",
      description:
        "López Obrador says he will not attend this week's Summit of the Americas in Los Angeles because Biden is not inviting Cuba, Venezuela or Nicaragua.",
      url:
        'https://www.washingtonpost.com/politics/2022/06/06/mexico-president-snub-biden/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2VXZ4PD2PAI6XDC6GLSHWQVVDM.jpg&w=1440',
      publishedAt: '2022-06-07T02:13:00Z',
      content:
        'Placeholder while article actions load\r\nMexican President Andrés Manuel López Obrador said on Monday that he will not attend this weeks Summit of the Americas in Los Angeles, after President Biden de… [+6639 chars]',
    },
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Ryan Gaydos',
      title:
        'Aaron Donald gets big raise from Rams after Super Bowl run: report - Fox News',
      description:
        'Aaron Donald is widely considered one of the most dominant pass rushers in all of football and is being paid like it now.',
      url: 'https://www.foxnews.com/sports/aaron-donald-big-raise-rams',
      urlToImage:
        'https://static.foxnews.com/foxnews.com/content/uploads/2022/02/AP22031113583651.jpg',
      publishedAt: '2022-06-07T01:46:00Z',
      content:
        'The Los Angeles Rams reportedly made Aaron Donald the highest-paid defensive player in the league following the teams Super Bowl victory in February over the Cincinnati Bengals.\r\nDonald, a fearsome d… [+2186 chars]',
    },
    {
      source: {
        id: null,
        name: '9to5Mac',
      },
      author: null,
      title:
        '2022 MacBook Air tidbits: Display limitations, Thunderbolt specs, BTO options, more - 9to5Mac',
      description:
        'The new MacBook Air is officially here and it comes with an all-new design, an M2 chip on the inside, and much more. In addition to the big picture changes Apple mentioned on stage at WWDC, there are a few other tidbits worth noting about the 2022 MacBook Air…',
      url: 'https://9to5mac.com/2022/06/06/2022-macbook-air-tidbits/',
      urlToImage:
        'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/Screen-Shot-2022-06-06-at-2.07.16-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
      publishedAt: '2022-06-07T01:38:00Z',
      content:
        'The new MacBook Air is officially here and it comes with an all-new design, an M2 chip on the inside, and much more. In addition to the big picture changes Apple mentioned on stage at WWDC, there are… [+3140 chars]',
    },
    {
      source: {
        id: null,
        name: 'MacRumors',
      },
      author: 'Joe Rossignol',
      title:
        "iOS 16 Adds Support for Nintendo Switch's Joy-Cons and Pro Controller - MacRumors",
      description:
        "While not advertised on Apple's website, it has been discovered that iOS 16 adds support for the Nintendo Switch's Joy-Cons and Pro...",
      url:
        'https://www.macrumors.com/2022/06/06/ios-16-supports-nintendo-joy-cons/',
      urlToImage:
        'https://images.macrumors.com/t/iXMATIp85-ALibN22_NUU7JAmPs=/1860x/article-new/2022/06/nintendo-joy-cons.jpg',
      publishedAt: '2022-06-07T01:18:21Z',
      content:
        "While not advertised on Apple's website, it has been discovered that iOS 16 adds support for the Nintendo Switch's Joy-Cons and Pro Controller. The feature was highlighted on Twitter by Riley Testut,… [+898 chars]",
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        '1899 - Official Teaser (2022) Andreas Pietschmann, Emily Beecham, Aneurin Barnard - IGN',
      description:
        'Check out the teaser for 1899, the upcoming Netflix series from the creators of Dark. Travel to the year "1899" aboard the Kerberos. What is lost will be fou...',
      url: 'https://www.youtube.com/watch?v=zNIPGFniN1w',
      urlToImage: 'https://i.ytimg.com/vi/zNIPGFniN1w/hqdefault.jpg',
      publishedAt: '2022-06-07T01:01:36Z',
      content: null,
    },
  ]
  constructor() {
    super()
    console.log('News Component constructor says hello to you! <3')
    this.state = { articles: this.articlesArray, loading: false }
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    })
  }
  render() {
    return (
      <div className=" container">
        <h2 className=" fs-1 fw-bold mt-5 text-center">
          NewsMonkey - Top Headlines
        </h2>
        <div className=" row justify-content-center p-5">
          {this.articlesArray.map((element) => {
            return (
              <div data-aos="fade-up" key={element.url} className="col-md-3">
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imgSrc={element.urlToImage}
                  source={element.source.name}
                  newsURL={element.url}
                  date={element.publishedAt.slice(0, 10)}
                  time={element.publishedAt.slice(11, 19)}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News