export type Language = 'hy' | 'ru' | 'en'
export type Product = { id: string; category: string; name: Record<Language,string>; description: Record<Language,string>; price: number; image: string; badge?: string; addons?: string[] }
export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMAGE%202026-10-05%2020%3A43%3A21-2gRkjzWgD3YVzBD6dbsKZyF1Q1RrFI.jpg'
export const categories = [
  { id:'burgers', hy:'Բուրգերներ', ru:'Бургеры', en:'Burgers', icon:'◒' }, { id:'shawarma', hy:'Շաուրմա', ru:'Шаурма', en:'Shawarma', icon:'◓' }, { id:'sandwiches', hy:'Սենդվիչներ', ru:'Сэндвичи', en:'Sandwiches', icon:'▱' }, { id:'pizza', hy:'Պիցցա', ru:'Пицца', en:'Pizza', icon:'◉' }, { id:'sides', hy:'Ֆրի և նախուտեստներ', ru:'Фри и закуски', en:'Sides', icon:'✦' }, { id:'salads', hy:'Աղցաններ', ru:'Салаты', en:'Salads', icon:'❋' }, { id:'drinks', hy:'Ըմպելիքներ', ru:'Напитки', en:'Drinks', icon:'◌' }, { id:'desserts', hy:'Դեսերտներ', ru:'Десерты', en:'Desserts', icon:'◇' },
]
const img = (id:string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`
export const products: Product[] = [
 {id:'classic-burger',category:'burgers',name:{hy:'Կլասիկ բուրգեր',ru:'Классический бургер',en:'Classic burger'},description:{hy:'Հյութալի տավարի միս, չեդդեր և մեր հատուկ սոուսը',ru:'Сочная говядина, чеддер и наш фирменный соус',en:'Juicy beef, cheddar and our signature sauce'},price:3500,image:img('photo-1568901346375-23c9450c58cd'),badge:'popular',addons:['cheese','sauce','meat']},
 {id:'agh-special',category:'shawarma',name:{hy:'Աղ ու Հաց շաուրմա',ru:'Шаурма Аг ու Хац',en:'Agh u Hats shawarma'},description:{hy:'Տապակած հավ, թարմ բանջարեղեն, թահինի',ru:'Курица, свежие овощи и тахини',en:'Roasted chicken, fresh vegetables and tahini'},price:2800,image:img('photo-1521305916504-4a1121188589'),badge:'new',addons:['sauce','meat']},
 {id:'crunchy-chicken',category:'sandwiches',name:{hy:'Կռիսփի չիկեն',ru:'Криспи чикен',en:'Crispy chicken'},description:{hy:'Խրթխրթան հավ, կաղամբի աղցան և թթու վարունգ',ru:'Хрустящая курица, коулслоу и маринованный огурец',en:'Crispy chicken, slaw and pickles'},price:3200,image:img('photo-1606755962773-d324e0a13086'),badge:'best',addons:['sauce']},
 {id:'margherita',category:'pizza',name:{hy:'Մարգարիտա',ru:'Маргарита',en:'Margherita'},description:{hy:'Սան Մարզանո լոլիկ, մոցարելլա, ռեհան',ru:'Томаты Сан-Марцано, моцарелла, базилик',en:'San Marzano tomatoes, mozzarella, basil'},price:3900,image:img('photo-1574071318508-1cdbab80d002')},
 {id:'loaded-fries',category:'sides',name:{hy:'Բեռնված ֆրի',ru:'Фри с начинкой',en:'Loaded fries'},description:{hy:'Ոսկեգույն ֆրի, պանիր և թարմ կանաչի',ru:'Золотистый картофель, сыр и зелень',en:'Golden fries, cheese and fresh herbs'},price:1800,image:img('photo-1573080496219-bb080dd4f877')},
 {id:'village-salad',category:'salads',name:{hy:'Գյուղական աղցան',ru:'Деревенский салат',en:'Village salad'},description:{hy:'Լոլիկ, վարունգ, կանաչի և պանիր',ru:'Томаты, огурцы, зелень и сыр',en:'Tomatoes, cucumber, herbs and cheese'},price:2200,image:img('photo-1540420773420-3366772f4999')},
 {id:'berry-lemonade',category:'drinks',name:{hy:'Հատապտղային լիմոնադ',ru:'Ягодный лимонад',en:'Berry lemonade'},description:{hy:'Տնական լիմոնադ՝ թարմ հատապտուղներով',ru:'Домашний лимонад со свежими ягодами',en:'House lemonade with fresh berries'},price:1200,image:img('photo-1513558161293-cdaf765ed2fd')},
 {id:'baklava',category:'desserts',name:{hy:'Տնական փախլավա',ru:'Домашняя пахлава',en:'House baklava'},description:{hy:'Շերտավոր խմոր, ընկույզ և մեղր',ru:'Слоёное тесто, орехи и мёд',en:'Layers of pastry, walnuts and honey'},price:1600,image:img('photo-1519671282429-b44660ead0a7')},
]
export const FREE_DELIVERY_THRESHOLD=10000
export const DELIVERY_FEE=800
export const getProduct=(id:string)=>products.find(p=>p.id===id)
export const translations = { hy:{ home:'Գլխավոր',about:'Մեր մասին',menu:'Մենյու',contact:'Կապ',faq:'ՀՏՀ',order:'Պատվիրել հիմա',cart:'Զամբյուղ',hero:'Համը, որ տուն է բերում',heroSub:'Թարմ, համեղ և սիրված ուտեստներ՝ ամեն օր',viewMenu:'Դիտել մենյուն',popular:'Սիրված ուտեստներ',categories:'Ընտրիր քո տրամադրությունը',why:'Ինչո՞ւ Աղ ու Հաց',fresh:'Թարմ բաղադրիչներ',made:'Պատրաստվում է պատվերից հետո',fast:'Արագ առաքում',trust:'Համ, որին վստահում եք',steps:'Պատվիրելը՝ երեք պարզ քայլով',select:'Ընտրիր ուտեստները',details:'Լրացրու պատվերի տվյալները',receive:'Ստացիր պատվերդ',offer:'Հատուկ առաջարկ',offerSub:'2 հիմնական ուտեստ + ֆրի + 2 ըմպելիք',reviews:'Մեր հյուրերն ասում են',final:'Սոված ե՞ս',finalSub:'Քո սիրելի ուտեստը քեզ է սպասում',menuTitle:'Մենյու',menuSub:'Ընտրիր քո սիրելի ուտեստը',search:'Փնտրել ուտեստ...',all:'Բոլորը',add:'Ավելացնել',aboutTitle:'Սեղանի շուրջ ամեն ինչ ավելի լավ է',aboutSub:'Աղ ու Հաց — հայկական հյուրընկալության ժամանակակից համը։',checkout:'Պատվերի ձևակերպում',empty:'Ձեր զամբյուղը դատարկ է',emptySub:'Ավելացրեք համեղ ուտեստներ՝ պատվերը սկսելու համար',subtotal:'Ենթագումար',delivery:'Առաքում',total:'Ընդամենը',continue:'Շարունակել գնումները',name:'Անուն',phone:'Հեռախոսահամար',address:'Հասցե',notes:'Մեկնաբանություն',submit:'Հաստատել պատվերը',success:'Պատվերը հաջողությամբ ընդունված է',thanks:'Շնորհակալություն, Ձեր պատվերը ստացանք։',story:'Մեր պատմությունը',philosophy:'Մեր փիլիսոփայությունը',contactTitle:'Կապվեք մեզ հետ',faqTitle:'Հաճախ տրվող հարցեր'}, ru:{home:'Главная',about:'О нас',menu:'Меню',contact:'Контакты',faq:'FAQ',order:'Заказать',cart:'Корзина',hero:'Вкус, который возвращает домой',heroSub:'Свежие и любимые блюда каждый день',viewMenu:'Открыть меню',popular:'Любимые блюда',categories:'Выбери настроение',why:'Почему Аг ու Хац',fresh:'Свежие ингредиенты',made:'Готовим после заказа',fast:'Быстрая доставка',trust:'Вкус, которому доверяют',steps:'Заказ в три шага',select:'Выберите блюда',details:'Заполните данные',receive:'Получите заказ',offer:'Спецпредложение',offerSub:'2 блюда + фри + 2 напитка',reviews:'Гости говорят',final:'Голодны?',finalSub:'Ваше любимое блюдо уже ждёт',menuTitle:'Меню',menuSub:'Выберите любимое блюдо',search:'Найти блюдо...',all:'Все',add:'Добавить',aboutTitle:'За столом всё лучше',aboutSub:'Аг ու Хац — современный вкус армянского гостеприимства.',checkout:'Оформление заказа',empty:'Корзина пуста',emptySub:'Добавьте вкусные блюда, чтобы начать заказ',subtotal:'Подытог',delivery:'Доставка',total:'Итого',continue:'Продолжить покупки',name:'Имя',phone:'Телефон',address:'Адрес',notes:'Комментарий',submit:'Подтвердить заказ',success:'Заказ успешно принят',thanks:'Спасибо, мы получили ваш заказ.',story:'Наша история',philosophy:'Наша философия',contactTitle:'Свяжитесь с нами',faqTitle:'Частые вопросы'}, en:{home:'Home',about:'About',menu:'Menu',contact:'Contact',faq:'FAQ',order:'Order now',cart:'Cart',hero:'The taste that feels like home',heroSub:'Fresh, delicious favorites made every day',viewMenu:'View menu',popular:'Popular dishes',categories:'Choose your mood',why:'Why Agh u Hats',fresh:'Fresh ingredients',made:'Made to order',fast:'Fast delivery',trust:'A taste you can trust',steps:'Ordering in three steps',select:'Choose your dishes',details:'Add your details',receive:'Get your order',offer:'Special offer',offerSub:'2 mains + fries + 2 drinks',reviews:'Guests say',final:'Feeling hungry?',finalSub:'Your favorite dish is waiting',menuTitle:'Menu',menuSub:'Choose your favorite dish',search:'Search dishes...',all:'All',add:'Add to cart',aboutTitle:'Everything is better around a table',aboutSub:'Agh u Hats — the modern taste of Armenian hospitality.',checkout:'Checkout',empty:'Your cart is empty',emptySub:'Add something delicious to start your order',subtotal:'Subtotal',delivery:'Delivery',total:'Total',continue:'Continue shopping',name:'Name',phone:'Phone',address:'Address',notes:'Notes',submit:'Place order',success:'Order successfully received',thanks:'Thank you, we received your order.',story:'Our story',philosophy:'Our philosophy',contactTitle:'Get in touch',faqTitle:'Frequently asked questions'} } as const
export const money=(n:number)=>`${n.toLocaleString('en-US')} ֏`

export async function createOrder(order: unknown){ return { id:`AH-${Math.floor(10000+Math.random()*89999)}`, status:'pending', order } }
export async function getProducts(){ return products }
export async function getOrder(id:string){ return { id, status:'pending' } }
export const faqItems=['Ինչպե՞ս կարող եմ պատվիրել','Որքա՞ն է առաքման արժեքը','Որքա՞ն ժամանակում է պատվերը հասնում','Կարո՞ղ եմ պատվերը վերցնել տեղում','Ինչպե՞ս կարող եմ վճարել','Կարո՞ղ եմ նշել հատուկ ցանկություններ']
export const reviews=[['Անի Մարտիրոսյան','Ամեն ինչ թարմ էր, իսկ համը՝ իսկապես տնային։'],['Դավիթ Սարգսյան','Շաուրման շատ համեղ էր, առաքումը՝ արագ։'],['Մարիամ Հովհաննիսյան','Սիրում եմ այս հանգիստ, ջերմ մթնոլորտը։']]
export const foodImages=['photo-1547592180-85f173990554','photo-1555939594-58d7cb561ad1','photo-1513104890138-7c749659a591','photo-1565299624946-b28f40a0ae38','photo-1540189549336-e6e99c3679fe','photo-1559339352-11d035aa65de']
export const categoryLabel=(id:string,l:Language)=>categories.find(c=>c.id===id)?.[l] ?? id
export const isLanguage=(value:string):value is Language=>['hy','ru','en'].includes(value)
export const t=(l:Language,key:keyof typeof translations.hy)=>translations[l][key] || translations.hy[key]
export const itemKey=(id:string,addons:string[]=[])=>`${id}-${addons.sort().join('-')}`
export type CartLine={key:string; productId:string; quantity:number; addons:string[]}
export const addonLabels={cheese:{hy:'Լրացուցիչ պանիր',ru:'Доп. сыр',en:'Extra cheese'},sauce:{hy:'Հատուկ սոուս',ru:'Фирменный соус',en:'Signature sauce'},meat:{hy:'Լրացուցիչ միս',ru:'Доп. мясо',en:'Extra meat'}}
export const addonPrice=(a:string)=>a==='meat'?800:a==='cheese'?400:250
export const formatAddon=(a:string,l:Language)=>addonLabels[a as keyof typeof addonLabels]?.[l]??a
export const formatPrice=(n:number)=>money(n)
export const getLinePrice=(line:CartLine)=>{const p=getProduct(line.productId)!; return p.price+line.addons.reduce((s,a)=>s+addonPrice(a),0)}
export const productImage=(p:Product)=>p.image
export const randomOrder=()=>`AH-${Math.floor(10000+Math.random()*89999)}`
export const localeName=(l:Language)=>l==='hy'?'Հայերեն':l==='ru'?'Русский':'English'
export const navItems=['home','about','menu','contact','faq'] as const
export const navPaths={home:'',about:'about',menu:'menu',contact:'contact',faq:'faq'} as const
export type NavKey=typeof navItems[number]
export const deliveryText={hy:'10,000 ֏-ից սկսած՝ առաքումն անվճար է',ru:'Бесплатная доставка от 10 000 ֏',en:'Free delivery from 10,000 ֏'}
export const phone='+374 33 48-17-48'
export const address = {
  hy: 'Երևան, Բագրատունյաց 33/4',
  ru: 'Ереван, Багратуняц 33/4',
  en: '33/4 Bagratunyats Ave, Yerevan',
}
export const hours={hy:'Ամեն օր · 10:00—23:00',ru:'Ежедневно · 10:00—23:00',en:'Daily · 10:00—23:00'}
export const imgUrl=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`
export const imageIds={hero:'photo-1601050690597-df0568f70950',story:'photo-1515003197210-e0cd71810b5f',about:'photo-1547592180-85f173990554'}
export const getPath=(lang:Language,path:string)=>`/${lang}${path?`/${path}`:''}`
export const defaultLang:Language='hy'
export const supportsLang=['hy','ru','en'] as const
export const orderStatuses=['pending','confirmed','preparing','out_for_delivery','delivered','cancelled'] as const
export const orderService={createOrder,getProducts,getOrder}
export const seo={title:'Աղ ու Հաց | Արագ սնունդ Երևանում',description:'Աղ ու Հաց — համեղ, թարմ և արագ սնունդ։ Պատվիրեք առցանց և ստացեք ձեր սիրելի ուտեստները։'}
export const instagram='@aghu_hats'
export const email='hello@aghu-hats.am'
export const social=['Instagram','Facebook','Telegram']
export const localePath=(lang:Language,slug:string='')=>`/${lang}${slug?`/${slug}`:''}`
export const getLangFromPath=(path:string):Language=>isLanguage(path.split('/')[1])?path.split('/')[1]:defaultLang
export const pathSlug=(path:string)=>path.split('/').filter(Boolean).slice(1).join('/')
export const getLocalized=(obj:Record<Language,string>,l:Language)=>obj[l]||obj.hy
export const safeProduct=(id:string)=>getProduct(id)||products[0]
export const categoryIds=categories.map(c=>c.id)
export const addonIds=['cheese','sauce','meat']
export const heroPattern='ornament-grid'
export const emptyCart:CartLine[]=[]
export const maxQuantity=20
export const minOrder=0
export const orderEta={hy:'30–45 րոպե',ru:'30–45 минут',en:'30–45 minutes'}
export const currencies=['AMD'] as const
export const paymentMethods=['cash','card','online'] as const
export const deliveryMethods=['delivery','pickup'] as const
export const sortOptions=['popular','price-low','price-high'] as const
export const categoryImages=categories.reduce((acc,c,i)=>({...acc,[c.id]:imgUrl(foodImages[i%foodImages.length])}),{} as Record<string,string>)
export const productByCategory=(cat:string)=>products.filter(p=>p.category===cat)
export const allProducts=products
export const appBrand='ԱՂ ՈՒ ՀԱՑ'
export const appBrandEn='Agh u Hats'
export const appBrandRu='Аг ու Хац'
export const footerCopy={hy:'Հայկական համ, ժամանակակից սեղան։',ru:'Армянский вкус, современный стол.',en:'Armenian taste, a modern table.'}
export const checkoutFields=['name','phone','address','notes'] as const
export const noOp=()=>undefined
export const hasItems=(lines:CartLine[])=>lines.length>0
export const lineCount=(lines:CartLine[])=>lines.reduce((s,l)=>s+l.quantity,0)
export const subtotal=(lines:CartLine[])=>lines.reduce((s,l)=>s+getLinePrice(l)*l.quantity,0)
export const delivery=(sub:number)=>sub>=FREE_DELIVERY_THRESHOLD?0:DELIVERY_FEE
export const total=(lines:CartLine[])=>subtotal(lines)+delivery(subtotal(lines))
export const year=2026
export const menuCategories=[{id:'all',hy:'Բոլորը',ru:'Все',en:'All'},...categories]
export const badgeLabel=(b:string|undefined,l:Language)=>b==='new'?({hy:'Նոր',ru:'Новинка',en:'New'}[l]):b==='best'?({hy:'Լավագույն',ru:'Бестселлер',en:'Best seller'}[l]):({hy:'Սիրված',ru:'Популярное',en:'Popular'}[l])
export const buttonArrow='→'
export const brandInitial='Ա'
export const menuCount=products.length
export const deliveryArea={hy:'Երևան և հարակից տարածքներ',ru:'Ереван и ближайшие районы',en:'Yerevan and nearby areas'}
export const privacy='privacy'
export const orderNumberPrefix='AH'
export const defaultCategory='all'
export const isValidPhone=(value:string)=>value.replace(/\D/g,'').length>=8
export const slugFor=(p:Product)=>p.id
export const titleFor=(p:Product,l:Language)=>p.name[l]
export const descriptionFor=(p:Product,l:Language)=>p.description[l]
export const categoryFor=(p:Product,l:Language)=>categoryLabel(p.category,l)
export const openHours='10:00—23:00'
export const mapEmbed='https://www.google.com/maps?q=Komitas+49+Yerevan&output=embed'
export const featuredProducts=products.slice(0,6)
export const related=(p:Product)=>products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,3)
export const reviewCount=128
export const orderCta='order'
export const routeSlugs=['about','menu','contact','cart','checkout','order-success','faq'] as const
export const routeLabel=(slug:string,l:Language)=>slug==='about'?t(l,'about'):slug==='menu'?t(l,'menu'):slug==='contact'?t(l,'contact'):slug==='faq'?t(l,'faq'):slug
export const logoAlt='Աղ ու Հաց logo'
export const titleSuffix=' | Աղ ու Հաց'
export const normalizeLanguage=(l:string):Language=>isLanguage(l)?l:defaultLang
export const isCategory=(c:string)=>categoryIds.includes(c)
export const productSearch=(q:string,l:Language)=>products.filter(p=>`${p.name[l]} ${p.description[l]}`.toLowerCase().includes(q.toLowerCase()))
export const toPrice=(n:number)=>n.toLocaleString('hy-AM')+' ֏'
export const orderSummary=(lines:CartLine[])=>({subtotal:subtotal(lines),delivery:delivery(subtotal(lines)),total:total(lines)})
export const getRoute=(slug:string)=>routeSlugs.includes(slug as never)?slug:'home'
export const getHeroImage=()=>imgUrl(imageIds.hero)
export const getStoryImage=()=>imgUrl(imageIds.story)
export const getAboutImage=()=>imgUrl(imageIds.about)
export const generatedAt='2026-10-05'
export const restaurantTagline = {
  hy: 'Հայկական ջերմություն՝ յուրաքանչյուր պատառի մեջ',
  ru: 'Армянское тепло в каждом кусочке',
  en: 'Armenian warmth in every bite',
}
export const menuIntro={hy:'Անկեղծ բաղադրիչներ, մեծ համ և մի փոքրիկ սեր՝ ամեն ափսեում։',ru:'Честные ингредиенты, большой вкус и немного любви в каждой тарелке.',en:'Honest ingredients, big flavor and a little love in every plate.'}
export const contactIntro={hy:'Գրեք կամ զանգահարեք մեզ — ուրախ կլինենք օգնել։',ru:'Напишите или позвоните — будем рады помочь.',en:'Write or call us — we are happy to help.'}
export const aboutBody={hy:'Մենք հավատում ենք, որ լավ սնունդը միավորում է մարդկանց։ Աղ ու Հացը ստեղծվել է Երևանի առօրյային համ, ջերմություն ու մի փոքր դադար ավելացնելու համար։',ru:'Мы верим, что хорошая еда объединяет людей. Аг ու Хац создан, чтобы добавлять вкуса, тепла и паузы в повседневный Ереван.',en:'We believe good food brings people together. Agh u Hats was created to add flavor, warmth and a pause to everyday Yerevan.'}
export const patternData='celtic'
export const routeNames=routeSlugs
export const itemTotal=(line:CartLine)=>getLinePrice(line)*line.quantity
export const isFreeDelivery=(sub:number)=>sub>=FREE_DELIVERY_THRESHOLD
export const getLanguageLabel=(l:Language)=>l.toUpperCase()
export const buttonLabel=(l:Language)=>t(l,'add')
export const navLabel=(key:NavKey,l:Language)=>t(l,key)
export const imageAlt=(p:Product,l:Language)=>`${p.name[l]} — ${appBrand}`
export const getCategoryName=(id:string,l:Language)=>categoryLabel(id,l)
export const getRelatedProducts=(p:Product)=>related(p)
export const getProductsForCategory=(c:string)=>c==='all'?products:productByCategory(c)
export const allLanguages=['hy','ru','en'] as const
export const languageNames={hy:'HY',ru:'RU',en:'EN'}
export const mainNav=navItems
export const formatNumber=(n:number)=>n.toLocaleString('hy-AM')
export const restaurantAddress=address.hy
export const restaurantPhone=phone
export const restaurantHours=hours.hy
export const checkoutSuccessPath='order-success'
export const menuPath='menu'
export const homePath=''
export const aboutPath='about'
export const contactPath='contact'
export const faqPath='faq'
export const cartPath='cart'
export const checkoutPath='checkout'
export const productPath=(id:string)=>`menu/${id}`
export const categoryPath=(id:string)=>`menu/${id}`
export const categoryIcons=categories.map(c=>c.icon)
export const productNames=products.map(p=>p.name.hy)
export const productPrices=products.map(p=>p.price)
export const hasBadge=(p:Product)=>Boolean(p.badge)
export const originalPrice=(p:Product)=>p.id==='classic-burger'?3900:undefined
export const getOriginalPrice=(p:Product)=>originalPrice(p)
export const quickOrderText={hy:'Արագ, տաք, հենց հիմա',ru:'Быстро, горячо, прямо сейчас',en:'Fast, hot, right now'}
export const trustStats=[['4.9','գնահատական'],['30–45','րոպե'],['100%','թարմ']]
export const ctaCopy={hy:'Պատվիրիր հիմա',ru:'Закажи сейчас',en:'Order now'}
export const sectionEyebrow='Agh u Hats'
export const footerYear='© 2026 Աղ ու Հաց'
export const supportedRoutes=['/','/about','/menu','/menu/[category]','/menu/[id]','/contact','/cart','/checkout','/order-success','/faq']
export const orderPayload=(lines:CartLine)=>({items:lines,summary:orderSummary(lines)})
export const makeHref=(lang:Language,slug='')=>`/${lang}${slug?`/${slug}`:''}`
export const homeHref=(lang:Language)=>makeHref(lang)
export const categoryHref=(lang:Language,id:string)=>makeHref(lang,`menu/${id}`)
export const productHref=(lang:Language,id:string)=>makeHref(lang,`menu/${id}`)
export const safeLang=(lang:string)=>normalizeLanguage(lang)
export const defaultSeo=seo
export const logoSource=logoUrl
export const altLogo=logoAlt
export const colorPalette=['#303236','#A79B8B','#F2EEE8','#C5A06A','#665849','#FFFFFF']
export const keyFeatures=['fresh','made','fast','trust'] as const
export const reviewData=reviews
export const footerLinks=['home','about','menu','contact','faq'] as const
export const pagePaths=['','about','menu','contact','cart','checkout','order-success','faq']
export const formatCartCount=(n:number)=>n>99?'99+':String(n)
export const getFeatured=()=>featuredProducts
export const orderTitle=(l:Language)=>t(l,'checkout')
export const successTitle=(l:Language)=>t(l,'success')
export const getFaq=()=>faqItems
export const getReviews=()=>reviews
export const getCategories=()=>categories
export const getMenuCategories=()=>menuCategories
export const getLanguagePath=(l:Language)=>`/${l}`
export const getCartPath=(l:Language)=>`/${l}/cart`
export const getCheckoutPath=(l:Language)=>`/${l}/checkout`
export const getSuccessPath=(l:Language)=>`/${l}/order-success`
export const logoDimensions={width:72,height:72}
export const mobileBreak='md'
export const desktopBreak='lg'
export const toastCopy={hy:'Ավելացվեց զամբյուղ',ru:'Добавлено в корзину',en:'Added to cart'}
export const notFoundCopy={hy:'Չգտանք այս էջը',ru:'Страница не найдена',en:'Page not found'}
export const appDescription=seo.description
export const headingFont='Noto Sans Armenian'
export const bodyFont='Noto Sans Armenian'
export const hasRoute=(slug:string)=>routeNames.includes(slug as never)
export const priceSort=(a:Product,b:Product)=>a.price-b.price
export const popularFirst=(a:Product,b:Product)=>Number(Boolean(b.popular))-Number(Boolean(a.popular))
export const getAddonPrice=addonPrice
export const cartStorageKey='agh-u-hats-cart'
export const storageVersion=1
export const isProduct=(value:unknown):value is Product=>Boolean(value&&typeof value==='object'&&'id' in value)
export const normalizeCart=(value:unknown):CartLine[]=>Array.isArray(value)?value as CartLine[]:[]
export const getCartLine=(lines:CartLine[],key:string)=>lines.find(l=>l.key===key)
export const updateQuantity=(lines:CartLine[],key:string,delta:number)=>lines.map(l=>l.key===key?{...l,quantity:Math.max(0,Math.min(maxQuantity,l.quantity+delta))}:l).filter(l=>l.quantity>0)
export const removeLine=(lines:CartLine[],key:string)=>lines.filter(l=>l.key!==key)
export const addLine=(lines:CartLine[],line:CartLine)=>{const existing=lines.find(l=>l.key===line.key);return existing?lines.map(l=>l.key===line.key?{...l,quantity:Math.min(maxQuantity,l.quantity+line.quantity)}:l):[...lines,line]}
export const makeLine=(id:string,addons:string[]=[]):CartLine=>({key:itemKey(id,addons),productId:id,quantity:1,addons})
export const getCategory=(id:string)=>categories.find(c=>c.id===id)
export const getBadge=(p:Product)=>p.badge
export const useRemoteImages=true
export const version='1.0.0'
export const buildName='agh-u-hats'
export const generatedBy='v0'
export const clearable=true
export const phonePlaceholder='+374 77 00 00 00'
export const orderFormRequired=['name','phone','address']
export const defaultPayment='cash'
export const defaultDelivery='delivery'
export const defaultTime='ASAP'
export const contactFields=['name','phone','email','message']
export const footerTagline=footerCopy
export const finalCta=ctaCopy
export const legalYear=year
export const heroHeadline='Համը, որ տուն է բերում'
export const heroSupporting='Թարմ, համեղ և սիրված ուտեստներ՝ ամեն օր'
export const aboutMeaning='«Աղ ու Հաց» — հայկական մշակույթում հյուրընկալության, սեղանի և միասին ուտելու խորհրդանիշ է։'
export const coreValues=['fresh','made','trust'] as const
export const serviceLayer={createOrder,getProducts,getOrder}
export const appRoutes=supportedRoutes
export const logoImage=logoUrl
export const accentColor='#C5A06A'
export const warmCream='#F2EEE8'
export const charcoal='#303236'
export const taupe='#A79B8B'
export const brown='#665849'
export const white='#FFFFFF'
export const allTranslations=translations
export const languageOrder=['hy','ru','en'] as const
export const routeDefault='/'
export const emptyString=''
export const sourceImage='uploaded logo'
export const noSupabaseRequired=true
export const readyForSupabase=true
export const api={createOrder,getProducts,getOrder}
export const finalYear=2026
export const siteName=appBrand
export const siteNameEn=appBrandEn
export const siteNameRu=appBrandRu
export const isHy=(l:Language)=>l==='hy'
export const isRu=(l:Language)=>l==='ru'
export const isEn=(l:Language)=>l==='en'
export const defaultRoute='hy'
export const languageSwitch=languageNames
export const productCount=products.length
export const categoryCount=categories.length
export const faqCount=faqItems.length
export const logoSourceUrl=logoUrl
export const dataReady=true
export const end='end'
