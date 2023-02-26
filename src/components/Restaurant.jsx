import React from "react";   
import Store from "./Store"; 

const Restaurant = () => { 
    return ( 
        <div className="Restaurant">  
            <table>
                <thead>
                <tr> 
                    <th>Restaurants</th> 
                    <th>Shopping</th> 
                    <th>Parks</th>  
                    <th>Snacks</th>
                </tr>
                </thead> 
               <tbody>  
                <tr>  
                    <Store image= "./public/imgs/99Favor.png"store='99 Favor Taste' name="If you are a Hotpot lover, this is a must go for you! It is one of the first and most popular Hotpot and Barbeque place on 8th Avenue." link="https://99favortaste.com/"/> 
                    <Store image= "./public/imgs/feiLong.png"store='Fei Long Supermarket' name="This is perhaps the biggest Asian Supermarket in Brooklyn, with people living all over the bourough coming to buy their groceries here. In addition to shopping, there is a food court where you can enjoy plenty of Asian cuisine!" link="https://www.google.com/maps?q=fei+Long+market&rlz=1C5CHFA_enUS1017US1017&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiAoq6lj6_9AhWlEGIAHdQaAY4Q_AUoAXoECAEQAw"/> 
                    <Store image= "./public/imgs/leifEricson.png"store='Leif Ericson Park' name="Located on 66th street, Leif Ericson park has a playground, basketball court, tennis court, and even a dog park! It spans almost two avenues." link="https://www.google.com/maps/place/Leif+Ericson+Park/@40.6372994,-74.0251681,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24551d91a5a4f:0x1a5ae5808ee980ce!8m2!3d40.6372953!4d-74.0229794"/>  
                    <Store image= "./public/imgs/kung.png"store='Kung Fu Tea' name="One of the oldest Boba brands, Kung Fu Tea was also one of the first Boba stores to open a location on 8th Ave. In addition to their old drinks, they are always innovating and coming up with new ones!" link= "https://www.kungfutea.com/"/> 
                </tr> 
                <tr> 
                    <Store image= "./public/imgs/pacificPalace.png"store='Pacific Palace' name="A friend that you haven't seen in ages came to visit? Oh no, but they have to leave before noon, yet you still want to have a quick breakfast with the,. Look no further! Pacific Palace offers customers a unique menu of Dim Sum and Cnatonese classics, along with complimentary tea." link="https://pacificanatogo.com/"/>  
                    <Store image= "./public/imgs/goodFortune.png"store='HL Supermarket' name="One of the more recent supermarkets, HL supermarket is not as popular as Fei Long but still offers a great discount on certain food items. Maybe it is the location." link="https://www.google.com/maps/place/HL+Supermarket/@40.6295889,-74.0139233,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2454613258283:0xfbae5463d88b00d1!8m2!3d40.6295889!4d-74.0117346"/>
                    <Store image= "./public/imgs/sunset.png"store='Sunset Park' name="Located in the neighborhood of Sunset Park, Sunset Park is the largest park in the neighborhood. In addition to playgrounds, a recreation center, handball court and basketball court, you can also get a amazing view of the Manhattan skyline." link="https://www.google.com/maps/place/Sunset+Park/@40.6479557,-74.008229,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ac85fcd7669:0x3b0395588247b8af!8m2!3d40.6479517!4d-74.0037443"/> 
                    <Store image= "./public/imgs/kim.png"store="Kim's Korean Corn Dog" name="A recent addition to the many eateries in the neighborhood, Kim's Korean Corn Dogs adds a taste of Korean food in a neighborhood with traditionally chinese eateries." link="https://www.google.com/maps/place/Kim%E2%80%99s+Korean+Corn+Dog/@40.6355954,-74.011381,17z/data=!3m1!4b1!4m5!3m4!1s0x89c245aa6b9bfeb5:0x6e8506e788b7cb58!8m2!3d40.6355913!4d-74.0091923"/> 
                </tr> 
                <tr>  
                    <Store image= "./public/imgs/wongwong.png"store='Wong Wong Noodle Shop' name="Are you a big fan of noodles? Well look no further! Wong Wong noodle shop offers one of the best handpulled noodles in the neighborhood, with many different soup bases." link="https://www.google.com/maps/place/Wong+Wong+Noodle+Soup/@40.6387526,-74.0087061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2454aa0a04545:0x4eeb0224c67006a8!8m2!3d40.6387059!4d-74.0064379" /> 
                    <Store image= "./public/imgs/ifresh.png"store='I Fresh Market' name="Originally know as 'Hong Kong Market,' I Fresh Market is smaller than the other two supermarkets on the list but still provides the community with a variety of east asian food." link="https://www.google.com/maps/place/I+Fresh+Market/@40.634702,-74.0116595,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24549785ee07b:0xa87d9a0529c7fa88!8m2!3d40.6346979!4d-74.0094708"/>
                    <Store image= "./public/imgs/prospect.png"store='Prospect Park' name="Prospect Park is the largest park in Brooklyn, and while it is not exactly located around 8th Avenue, Prospect Park offers Ice skating, rowboating, and is also home to the Prospect Park Zoo. It takes around a hour to walk there from 8th avenue, so it could be a great excercise for those who love excercising!" link="https://www.google.com/maps/place/Prospect+Park/@40.6578404,-73.9852017,14z/data=!4m10!1m2!2m1!1sProspect+Park!3m6!1s0x89c25b1087680443:0x178bf7c600df7a98!8m2!3d40.6602037!4d-73.9689558!15sCg1Qcm9zcGVjdCBQYXJrWg8iDXByb3NwZWN0IHBhcmuSAQRwYXJr4AEA!16zL20vMDFzN2p3"/>
                    <Store image= "./public/imgs/tiger.png"store='Tiger Sugar' name="When Tiger Sugar first opened its doors, the line of customers wanting to get a taste of their Brown Sugar Bubble Tea never seemed to die down. Although it is not as hype anymore, Tiger Sugar is the best place for a quick brown sugar drink." link = "https://tigersugar.co/"/> 
                </tr> 

                </tbody>  
            </table>
        </div>
    )
} 

export default Restaurant; 