function fuck() {
    console.log('I wanna fuck ' + this.name)
}

const names = {
    name: 'susie',
    age: 19,
    showAge (){
        console.log(this.age)
    }  
}

fuck.bind(names)()
names.showAge()
