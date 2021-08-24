import  {snack_for_kids , healthy_snacks , easy_on_stomach , smoothie} from './data.js'

 class DataExtract{
   constructor(type , product){
   this.type =  type;
   this.product = product
   }
   getType(){
    return this.type;
            }
   getProduct(){
    return this.product
             }
    // -----------------SNACK FOR KID --------------------
    snack_for_kids(){
     
      if (this.type === "snack_for_kids"){
           if(this.product === "Toddler_Muffins"){
                
                 return snack_for_kids.Toddler_Muffins;
           }else if (this.product === "Kettle_Corn"){

          return snack_for_kids.Kettle_Corn;
           }else if (this.product === "Watermelon_Ice_Pop"){
   
   return snack_for_kids.Watermelon_Ice_Pop;
        }else if (this.product === "Fried_Flour_Tortilla_Chips"){
    
      return snack_for_kids.Fried_Flour_Tortilla_Chips;
        }{
            console.warn('Couldnt Find the Product in '+this.type + "Of" + this.product)
        }
      }else {
          console.warn('wrong method call for '+this.type )
      }
    }
    //---------------------SNACK FOR KID --------------------

    // -----------------healthy_snacks --------------------
    healthy_snacks(){
     
        if (this.type === "healthy_snacks"){
             if(this.product === "Energy_Meat_Balls"){
        
           return healthy_snacks.Energy_Meat_Balls;
             }else if (this.product === "Almond_Butter"){
      
           return healthy_snacks.Almond_Butter;
             }else if (this.product === "Tuna_Ball"){
           return healthy_snacks.Tuna_Ball;
          }else if (this.product === "Hard_Boiled_Egg_Sandwich"){
           
           return healthy_snacks.Hard_Boiled_Egg_Sandwich;
          }{
            console.warn('Couldnt Find the Product in '+this.type + "Of" + this.product)
        }
        }else {
            console.warn('wrong method call for '+this.type )
        }
      }
      //---------------------healthy_snacks--------------------

    // -----------------easy_on_stomach --------------------
    easy_on_stomach(){
     
        if (this.type === "easy_on_stomach"){
             if(this.product === "Moroccan_Vegetable_Soup"){
            console.log(easy_on_stomach.Moroccan_Vegetable_Soup)
            return easy_on_stomach.Moroccan_Vegetable_Soup;
             }else if (this.product === "Indian_Vegetable_Rice"){
            console.log(easy_on_stomach.Indian_Vegetable_Rice)
            return easy_on_stomach.Indian_Vegetable_Rice;
             }else if (this.product === "Mixed_Vegetable_Salad"){
              console.log(easy_on_stomach.Mixed_Vegetable_Salad)
              return easy_on_stomach.Mixed_Vegetable_Salad;
          }else if (this.product === "Strawberry_Apple_Sauce"){
              console.log(easy_on_stomach.Strawberry_Apple_Sauce)
              return easy_on_stomach.Strawberry_Apple_Sauce;
          }{
            console.warn('Couldnt Find the Product in '+this.type + "Of" + this.product)
        }
        }else {
            console.warn('wrong method call for '+this.type )
        }
      }
      //---------------------easy_on_stomach--------------------

    // -----------------smoothie --------------------
    smoothie(){
     
        if (this.type === "smoothie"){
             if(this.product === "Avo_Berry_Smoothie"){
        
                return smoothie.Avo_Berry_Smoothie;
             }else if (this.product === "Mango_Smoothie"){

                return smoothie.Mango_Smoothie;
             }else if (this.product === "Banana_Berry_Smoothie"){
              
                return smoothie.Banana_Berry_Smoothie
          }else if (this.product === "Keto_Chocolate_Smoothie"){
                  
                  return smoothie.Keto_Chocolate_Smoothie;
          }else{
              console.warn('Couldnt Find the Product in '+this.type + "Of" + this.product)
          }
        }else {
            console.warn('wrong method call for '+this.type )
        }
      }
      //---------------------smoothie--------------------

}

export {DataExtract}