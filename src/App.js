import React from "react";
import "./App.css"; //Bu satır, aynı klasörde bulunan App.css dosyasını projeye dahil eder.

const App = () => <PersonList />; //App adında bir bileşen tanımlanıyor. Bu bileşen sadece PersonList bileşenini render eder.

const PersonList = () => {
  //Bu bileşen, birden fazla kişi için bilgileri içeren bir liste render eder.
  const people = [
    //people adında bir dizi tanımlanıyor. Bu dizi, her bir kişi için bir nesne içerir.
    { img: 22, name: "John", job: "developer" },
    { img: 34, name: "Bob", job: "designer" },
    { img: 56, name: "Peter", job: "artist" },
  ];

  return (
    //PersonList bileşeni, bir section etiketi içinde, her bir kişiyi gösteren Person bileşenlerini render eder.
    //Person bileşeni, person adında bir prop (özellik) alıyor. Bu, people dizisindeki ilk elemanı (yani John'u) içeriyor.
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        error nesciunt libero consequatur harum aut. 
      </Person>
      <Person person={people[2]} />
    </section>
  ); //iki Person bileşeni arasında bir açıklama (çocuk eleman olarak) geçiliyor. children prop'u bu metni içerecek.
};

const Person = (props) => { //props bu bileşene dışarıdan geçirilen verileri içerir.
  const { img, name, job } = props.person; //Props'dan alınan person nesnesi, img, name ve job olarak açılıyor. Bu şekilde nesnenin her bir özelliğine kolayca erişiliyor.
  const { children } = props; //children adında bir değişken tanımlanıyor ve props içindeki çocuk elemanlardan alınan içerik buna atanıyor.
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;//url değişkeni, bir API'den rastgele kullanıcı resimlerini çeker. Bu URL, kişiye özgü bir numara olan img parametresiyle dinamik olarak değişir.
  
  return (//Person bileşeni, her kişiyi göstermek için HTML benzeri bir yapı döndürür. 
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App; //Bu satır, App bileşenini dışa aktarır. Böylece bu bileşen başka dosyalarda kullanılabilir.
//PersonList bileşeni birden fazla kişiyi, Person bileşeni ise her bir kişiyi temsil eder.