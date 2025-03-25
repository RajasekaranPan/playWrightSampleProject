

class A{

    constructor(private browser: string)
    {
        this.browser = browser;
    }
    

    method1(){

        return new Promise<void>((resolve, reject) => { 
            
            setTimeout(()=> {
            
            this.browser = 'Firefox';
        
            console.log('method 1: ', this.browser);

            resolve(); // reject('reason');

        }, 4000)
    })
    };


    method2(){
    
        return new Promise<void>((resolve) => { 
            setTimeout(()=> {
            console.log('method 2: ', this.browser);

            resolve(); 

        }, 2000)
    })

    };

    async callingMethod(){

        await this.method1()
        .then(() => {this.method2()})
        .catch((error) => console.log(error));
       

        await this.method1();
        await this.method2();
 
    }

}


const obj = new A("Chrome");

obj.callingMethod();

