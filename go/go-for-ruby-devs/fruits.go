package main

type Fruit struct {
	name string
}

func (f *Fruit) Name() string {
	return f.name
}
func (f *Fruit) Eat() {
	println("Inside Eat(), Name is " + f.name)
}

type Apple struct {
	Fruit
}

func main() {
	a := new(Apple)
	a.Fruit.name = "Apple"
	a.Fruit.Eat()
	a.Eat()
}
