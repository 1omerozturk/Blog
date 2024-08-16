# Design Patterns

Yazılım geliştirme, karmaşık problemleri çözmek için kullanılan güçlü bir araçtır. Ancak bu güç, beraberinde karmaşıklık ve tekrar eden sorunları da getirir. İşte bu noktada **design patterns**  ( Tasarım Desenleri ) imdadımıza yetişir. Design patterns, yazılım tasarımında sıkça karşılaşılan sorunlara önceden belirlenmiş, test edilmiş ve tekrar kullanılabilir çözümler sunar. 

/Bu yazımda, design patterns’lerin ne olduğunu, neden önemli olduklarını, örneklerle birlikte daha derinlemesine inceleyeceğiz ve projelerinizde nasıl kullanabileceğinizi öğreneceksiniz  

**Ad**: isim olarak ingilizce kullanılacaktır.
**Sınıf: yaratımsal**, **yapısal**, **davranışsal**
**Amaç:** Daha iyi bir şekilde yazılım geliştirmek
**Yapı:** *OOP* üzerinde genellikle kullanılacaktır.
**Sonuçlar:** Örnek uygulamalar ile pekiştirmeler yapılacak.

Desen Sınıfları => **Yaratımsal,** **Yapısal**, **Davranışsal** olarak 3 sınıfa ayrılır.

## Yaratımsal Desenler

> - İlklendirmenin soyutlaştırılması ( interface, arayüz ),
- Sistem nesnelerinin yaratılmasından bağımsız hale gelmesi
- Sınıf ve nesne desenleri
- Nesnelerin ilklendirilmesi gizli
- Yaratımsal nesneler; Ne, kim, nasıl ve  ne zaman hakkında bilgiler verir.
> 
- Singelton
- Abstract
- Factory,
- Builder,
- Factory
- Method,
- Prototype

## Yapısal Desenler

> Sınıf ve nesneler  ile daha büyük yapıların oluşturulmasına odaklanır.
> 

> Kalıtım (inheritance) yerine bileşim (composition) tercih eder.
> 
- Adapter,
- Bridge,
- Composite,
- Decorator,
- Fecade,
- Flyweight,
- Proxy

## Davranışsal Desenler

> Algoritmaların ve nesneler arası sorumlulukların atanması ile ilgilidir.
> 
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template
- Visitor

---

---

### Iterator Design Pattern

Iterator: Yineleyici, tekrarlayıcı

Bilinen diğer adı **Cursor**; imleç

**Amaç:** Koleksiyonun alt yapısını teşhir etmeden elemanlarına sıralı erişim sağlamak

- Koleksiyonlarda farklı şekilde gezinmek mümkündür.
- Koleksiyona erişim ve gezinme sorumluluğu koleksiyondan *iterartor*’a geçiyor.
- **Nesne davranışsal** bir tasarım desenidir.
- Aşağıda bir Iterator design patterns UML diyagramı verilmiştir.

Bu UML sınıf diyagramı, **Iterator** tasarım desenini göstermektedir.

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/iterator.gif?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/iterator.gif?raw=true)

Desenin ana bileşenleri şunlardır:

1. **Iterator (Gezgin) Arayüzü**:
    - `first()`: Koleksiyondaki ilk öğeyi döndürür.
    - `next()`: Koleksiyondaki bir sonraki öğeyi döndürür.
    - `isDone()`: Koleksiyonun sonuna gelinip gelinmediğini kontrol eder.
    - `currentItem()`: Geçerli öğeyi döndürür.
2. **ConcreteIterator (Somut Gezgin)**:
    - Bu sınıf, `Iterator` arayüzünü uygular ve koleksiyon üzerinde gezmeyi sağlayan yöntemlerin somut implementasyonlarını içerir.
    - `ConcreteIterator`, koleksiyondaki geçerli pozisyonu izlemek için genellikle bir indeks kullanır ve `Iterator` arayüzündeki yöntemleri bu indeks yardımıyla uygular.
3. **Aggregate (Toplayıcı) Arayüzü**:
    - `createIterator()`: Koleksiyon üzerinde iterasyon yapmayı sağlayacak bir `Iterator` nesnesi oluşturur.
4. **ConcreteAggregate (Somut Toplayıcı)**:
    - Bu sınıf, `Aggregate` arayüzünü uygular ve belirli bir koleksiyonun yönetimini yapar.
    - `ConcreteAggregate`, `createIterator()` yöntemini kullanarak kendisine ait bir `ConcreteIterator` oluşturur.
5. **Client (Müşteri)**:
    - `Iterator` ve `Aggregate` nesnelerini kullanarak koleksiyonlar üzerinde iterasyon yapar.

Bu desenin genel amacı, farklı türde koleksiyonlar arasında gezinmeyi bir ara yüzle soyutlamaktır. Bu sayede, koleksiyonun iç yapısına bağımlı olmadan öğeler arasında dolaşmak mümkün hale gelir.

Günlük hayattan bir örnek vermek gerekirse 🪢

- Bir kütüphanedeki kitap raflarını düşünün. `ConcreteAggregate`, bu kitap raflarını temsil ederken, `ConcreteIterator` ise bu raflardaki kitaplar arasında gezinmenizi sağlar. `Client`, belirli bir rafın kitapları arasında gezinmek istediğinde `Iterator` ara yüzünü kullanarak bu işlemi gerçekleştirir.

Bu örnek, Iterator deseninin koleksiyonlar arasında gezinti yapmayı nasıl soyutladığını ve uygulamayı nasıl kolaylaştırdığını gösterir.

<aside>
🔑 Iterator design pattern örneğine aşağıdaki [**linkten**](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator) ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator
```

[Design-Patterns/Iterator at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)

---

---

### Composite Design Pattern

- **Composite**: Bileşim, birçok parçadan oluşan demektir.
- Bu desen, nesneleri ağaç yapısında birleştirerek, bir bütünün parçalarını tek bir nesne gibi ele almayı sağlar. Böylece, istemci kodunun bu parçaların ayrı ayrı mı yoksa bir bütün mü olduğu konusunda endişelenmesine gerek kalmaz.
- özellikle hiyerarşik yapılarda; dosya sistemleri, organizasyon şemaları gibi, tekrar eden işlemlerde esneklik sağlar ve mevcut hiyerarşiyi değiştirmek kolaylaşır.

**Amaç:** Bütüne ve bütünün parçalarına aynı şekilde erişim sağlamak.

- Nesne yapısaldır.
- Pencere
    - Etiket
    - Metin satırı
    - Açılır menü
        - Düğme
        - Metin satırı

Bileşim içerisindeki tüm nesnelere aynı şekilde davranma.

**Composite** ( Bileşim ) tasarım deseni UML diyagramı.

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/composite.jpg?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/composite.jpg?raw=true)

Desenin ana bileşenleri şunlardır:

1. **Component (Bileşen) Arayüzü**:
    - `operation()`: Hem yaprak (leaf) hem de bileşik (composite) nesnelerde gerçekleştirilmesi gereken bir işlemi tanımlar.
2. **Leaf (Yaprak)**:
    - Bu sınıf, ağaç yapısının son düğümlerini temsil eder ve `Component` ara yüzünü uygular.
    - Yaprak düğümler, daha fazla alt düğüm içermez.
3. **Composite (Bileşik)**:
    - Bu sınıf, alt düğümlere (bileşenlere) sahip olan düğümleri temsil eder ve `Component` arayüzünü uygular.
    - Bileşik nesneler, hem yaprak hem de başka bileşik nesneleri içerebilir.
    - `operation()` yöntemi, tüm alt bileşenler üzerinde `operation()` yöntemini çağırır.
4. **Client (Müşteri)**:
    - `Component` arayüzünü kullanarak yaprak ve bileşik nesnelerle etkileşime girer.

Diyagramdaki iki ayrı bölüm bu yapıyı daha net anlamamızı sağlıyor:

- **Sol Taraftaki Sınıf Diyagramı**: Bu bölümde `Component`, `Leaf` ve `Composite` arasındaki ilişkiler ve `operation()` yönteminin nasıl tanımlandığı gösterilmektedir. Composite sınıfı, kendi çocuk bileşenlerini tutar ve `operation()` yöntemini her bir çocuk bileşen için çağırır.
- **Sağ Taraftaki Nesne İşbirliği Diyagramı**: Bu bölümde ise bir müşteri nesnesinin bir bileşik nesneye (`composite1`) eriştiği ve bu bileşik nesnenin alt bileşenlere (`leaf1`, `leaf2`, `composite2` gibi) nasıl erişim sağladığı gösterilmektedir. Bu yapı, bileşik nesnelerin alt bileşenleri üzerinde operasyonlar gerçekleştirebilmesi için kullanılır.

Deseni daha iyi anlamak için günlük hayattan örnek vermek gerekirse 🪢

- Bir şirketin organizasyon yapısını düşünün. `Component` arayüzü, her seviyedeki çalışanın gerçekleştirmesi gereken ortak operasyonları tanımlar (örneğin, rapor hazırlamak).
- `Leaf`, bireysel çalışanları (yaprak düğümleri) temsil eder.
- `Composite`, departmanları veya takımları (bileşik düğümleri) temsil eder.
- `Client`, şirketin CEO'su veya yöneticisi olabilir ve bu kişi, departmanların veya bireysel çalışanların operasyonlarını başlatabilir.

Bu desen, hiyerarşik yapıları yönetmeyi kolaylaştırır ve bireysel nesneler ile birleşik nesneler üzerinde aynı şekilde işlem yapma esnekliği sağlar.

- Composite design pattern *ebeveyn referansları,* *ortak yöntemler*, command deseni ile birlikte MacroCommand elde edilebilir.
- Decorator ile birlikte sıkça kullanılır.
- *Iterator* ile composite sınıflar gezilebilir.

<aside>
🔑 Composite design pattern örneğine aşağıdaki [**linkten**](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator) ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Composite
```

[Design-Patterns/Composite at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/blob/main/Composite/)

---

---

### Command Design Pattern

- **Command**: Komut, emir anlamlarına gelir.
- Action (eylem ), Transaction (işlem) diğer bilinen adlarıdır.
- **Amaç**: Bir isteği ya da komutu, nesne olarak tanımlamak.
- İstek nesnesidir.
- Nesne davranışsaldır.

UML diyagramı verilen Command Design Pattern:

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/cmmndgif.gif?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/cmmndgif.gif?raw=true)

Bu UML diyagramı, **Command** (Komut) tasarım desenini,  bir işlemi (komutu) nesne olarak temsil etmeyi sağlar. Bu desen, işlemleri parametrik hale getirir ve işlemler arasında geri al (*undo*) ve yeniden yap (*redo*) gibi işlemleri desteklemeyi kolaylaştırır. 

Command deseninin ana bileşenleri şunlardır:

1. **Command Arayüzü**:
    - `Execute()`: Bir komutu çalıştırmak için kullanılan yöntemdir. Bu ara yüz, tüm komutların uygulaması gereken ortak bir yöntemi tanımlar.
2. **ConcreteCommand (Somut Komut)**:
    - `Command` arayüzünü uygular ve belirli bir işlemi gerçekleştirir.
    - Bu sınıf, işlemi gerçekleştirmek için gerekli olan durumu ve alıcı (*receiver*) nesnesini içerir.
    - `Execute()` yöntemi, alıcı nesnede (*receiver*) tanımlı olan belirli bir işlemi çağırır.
3. **Receiver (Alıcı)**:
    - Gerçek iş mantığını içeren sınıftır. Bu sınıf, komut tarafından çağrılan işlemleri gerçekleştirir.
    - `Action()`: Alıcının gerçekleştirdiği işlemdir.
4. **Invoker (Çağırıcı)**:
    - Komutun ne zaman çalıştırılacağını belirler. Komutun çalıştırılmasından sorumludur.
    - Çağırıcı, komut nesnesini tutar ve `Execute()` yöntemini çağırarak komutun çalışmasını sağlar.
5. **Client (Müşteri)**:
    - Komut nesnelerini oluşturur ve gerekli parametrelerle ayarlar.
    - Müşteri, komut nesnelerini oluşturur ve çağırıcıya iletir.

Diyagramın detayları:

- **Client**, belirli bir `ConcreteCommand` oluşturur ve bu komutu `Invoker`'a iletir.
- **Invoker**, kendisine iletilen komutu (`Command`) çalıştırmaktan sorumludur ve `Execute()` yöntemini çağırır.
- **ConcreteCommand**, komutu çalıştırdığında `Receiver` nesnesinin `Action()` yöntemini çağırır.
- **Receiver**, asıl iş mantığını içerir ve `Action()` yöntemi ile belirli bir işlemi gerçekleştirir.

Günlük hayattan bir örnek vermek gerekirse: 🪢

- Bir televizyon kumandasını düşünün.
    - **Command Arayüzü**, tüm komutların (örneğin, televizyonu açma, kapama, ses seviyesini artırma) uygulaması gereken ortak bir ara yüzdür.
    - **ConcreteCommand**, belirli bir komutun (örneğin, televizyonu açma) uygulamasıdır.
    - **Receiver**, televizyonun kendisidir ve belirli işlemleri (örneğin, televizyonu açma) gerçekleştirir.
    - **Invoker**, kumandanın kendisidir ve hangi butona basıldığında hangi komutun çalıştırılacağını belirler.
    - **Client**, kumandayı programlayan ve hangi butonun hangi komutu çalıştıracağını belirleyen kişidir.

Bu desen, işlemleri soyutlamak ve komutları parametrik hale getirmek için kullanılır. Özellikle geri al ve yeniden yap işlemlerinin gerektiği durumlarda çok kullanışlıdır.

<aside>
🔑 Command design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Command) [](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)**ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Command
```

[Design-Patterns/Command at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Command)

---

---

### State Design Pattern

- State: Durum, hal anlamlarına gelmektedir.
- **Amaç:** Bir nesnenin iç durumu değişince davranışının da değişmesinin sağlamak.
- Nesne davranışsaldır.
- If-else if yapısı örnek olabilir.
- Çok fazla durumun kontrol edilmesi zorlaşabilir bundan dolayı Finite State Machines, ( Sonlu durum makineleri ) kullanılır.

![https://www.allaboutcircuits.com/uploads/articles/state-diagram-circuit.jpg](https://www.allaboutcircuits.com/uploads/articles/state-diagram-circuit.jpg)

**State Design Pattern UML Diyagramı:**

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/state.jpg?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/state.jpg?raw=true)

Bu UML diyagramı, **State** (Durum) tasarım desenini göstermektedir. State deseni, bir nesnenin iç durumuna göre davranışını değiştirmesine olanak tanır. Bu desen, nesnenin durumlarını ve bu durumlara göre nasıl davrandığını soyutlar. State deseninin ana bileşenleri şunlardır:

1. **State (Durum) Arayüzü**:
    - `handle()`: Durum tarafından gerçekleştirilecek bir işlemi tanımlar. Bu yöntem, her bir somut durum (concrete state) tarafından farklı şekilde uygulanır.
2. **ConcreteStateA (Somut Durum A)** ve **ConcreteStateB (Somut Durum B)**:
    - `State` arayüzünü uygular ve belirli bir duruma özgü davranışları içerir.
    - Her bir somut durum, `handle()` yöntemini kendi durumu için özelleştirir.
3. **Context (Bağlam)**:
    - Mevcut durumu tutar ve duruma bağlı olarak davranışını değiştirir.
    - `request()`: İstemcinin çağırdığı yöntemdir ve bu yöntem mevcut duruma göre `handle()` yöntemini çağırır.

Diyagramın detayları:

- **Context**, mevcut durumu (`State` arayüzü) tutar ve istemciden (`Client`) gelen isteklere göre bu durumu yönetir.
- **State** arayüzü, `handle()` yöntemini tanımlar.
- **ConcreteStateA** ve **ConcreteStateB**, `State` arayüzünü uygular ve `handle()` yöntemini kendi durumlarına göre özelleştirir.
- **Context**, `request()` yöntemini çağırdığında, mevcut durumun `handle()` yöntemini çağırır ve böylece davranış, mevcut duruma göre belirlenir.

Günlük hayattan bir örnek vermek gerekirse:

- Bir trafik ışığını düşünün.
    - **State Arayüzü**, trafik ışığının farklı durumlarında (kırmızı, sarı, yeşil) yapılacak ortak işlemleri tanımlar.
    - **ConcreteStateA**, trafik ışığının kırmızı durumda olduğu bir durumu temsil eder ve bu durumda yapılacak işlemleri (örneğin, araçları durdurma) tanımlar.
    - **ConcreteStateB**, trafik ışığının yeşil durumda olduğu bir durumu temsil eder ve bu durumda yapılacak işlemleri (örneğin, araçları geçirme) tanımlar.
    - **Context**, trafik ışığının mevcut durumunu tutar ve duruma göre davranışını değiştirir (örneğin, kırmızıdan yeşile geçiş).

Bu desen, bir nesnenin davranışını durumuna göre değiştirmeyi ve bu durumları yönetmeyi kolaylaştırır. Özellikle, bir nesnenin iç durumuna bağlı olarak davranışının dinamik olarak değiştiği durumlarda kullanışlıdır.

<aside>
🔑 Command design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/State) [](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)**ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/State
```

[Design-Patterns/State at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/State)

---

---

### Factory Method Design Pattern

- **Factory:** Fabrika, imalathane, yapımevi; Method: yöntem
- Factory ⇒ Virtual Constructor - Sanal yapılandırıcı mahlaslarıdır.
- Sınıf yaratımsaldır.
- **Amaç:** Bir nesnenin yaratılması için tanımlanan ara yüzün altsınıflarına bu nesnenin hangi sınıftan olacağına karar verme hakkı sağlamaktır.

Factory Method Design Pattern UML diyagramı örneği: 

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/factory_design_pattern.png?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/factory_design_pattern.png?raw=true)

Bu UML diyagramı, **Factory Method** tasarım desenini kullanarak araç üretimini modelleyen bir örneği göstermektedir. Bu desen, nesne oluşturma sürecini soyutlar ve alt sınıflara bırakır, böylece nesne oluşturma işlemi kolayca genişletilebilir ve değiştirilebilir hale gelir. Bu diyagramdaki bileşenler ve ilişkileri şöyle açıklanabilir:

1. **Vehicle (Araç) Soyut Sınıfı**:
    - `plateNumber`: Araçların plaka numarasını tutan bir özellik.
    - `stop()`: Araçların durması için bir yöntem.
    - `move()`: Araçların hareket etmesi için bir yöntem.
    - Bu soyut sınıf, `Car` ve `Truck` gibi alt sınıflar tarafından genişletilir.
2. **Car (Araba) ve Truck (Kamyon) Sınıfları**:
    - `Vehicle` soyut sınıfını genişletirler.
    - `stop()` ve `move()` yöntemlerini kendi özelliklerine göre uygularlar.
    - Her iki sınıf da `Vehicle` soyut sınıfından türetilmiştir ve kendi spesifik davranışlarını tanımlar.
3. **VehicleFactory (Araç Fabrikası) Sınıfı**:
    - `getVehicle(String vehicleType)`: Belirli bir araç türüne göre bir `Vehicle` nesnesi oluşturur ve döner.
    - Bu sınıf, araç oluşturma işlemini soyutlar ve istemciden (client) bağımsız hale getirir.
4. **VehicleFactoryDemo (Araç Fabrikası Demo) Sınıfı**:
    - `main()`: Programın çalıştırıldığı ana yöntemdir.
    - Bu sınıf, `VehicleFactory` sınıfını kullanarak belirli araç türlerini oluşturur ve araçların davranışlarını test eder.

Diyagramın detayları:

- **Vehicle** soyut sınıfı, tüm araçların ortak özelliklerini ve yöntemlerini tanımlar.
- **Car** ve **Truck** sınıfları, `Vehicle` soyut sınıfını genişleterek kendi spesifik davranışlarını uygular.
- **VehicleFactory** sınıfı, `getVehicle()` yöntemini kullanarak belirli araç türlerini oluşturur. Bu yöntem, istemciden (client) aldığı araç türüne göre (`vehicleType`), `Car` veya `Truck` nesnesi oluşturur.
- **VehicleFactoryDemo** sınıfı, `main()` yönteminde `VehicleFactory` sınıfını kullanarak belirli araç türlerini oluşturur ve bu araçların `stop()` ve `move()` yöntemlerini çağırarak test eder.

Günlük hayattan bir örnek vermek gerekirse:

- Bir araba kiralama şirketini düşünün.
    - **Vehicle** soyut sınıfı, tüm araçların (örneğin, arabalar ve kamyonlar) ortak özelliklerini (örneğin, plaka numarası) ve davranışlarını (örneğin, durma ve hareket etme) tanımlar.
    - **Car** ve **Truck** sınıfları, belirli araç türlerini temsil eder ve `Vehicle` soyut sınıfından türetilir.
    - **VehicleFactory** sınıfı, müşterinin (client) talebine göre belirli bir araç türünü oluşturur.
    - **VehicleFactoryDemo** sınıfı, belirli bir araç türünü oluşturmak ve test etmek için `VehicleFactory` sınıfını kullanır.

Bu desen, nesne oluşturma sürecini soyutlamak ve genişletilebilir hale getirmek için kullanılır. Özellikle, hangi nesne türünün oluşturulacağına dinamik olarak karar verilmesi gerektiğinde bu desen çok kullanışlıdır.

<aside>
🔑 Command design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/State) [](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)**ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/State
```

[Design-Patterns/Command at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Command)

---

---

### Abstract Factory Design Pattern

- **Abstract:** soryut, **Factory:** fabrika, imalathane, yapımevi…
- Kit ( takım çantası, alet takımı ) diğer bilinen isimleridir.
- Factory Method deseni nesneleri üretir.
- Nesne yaratımsal desendir.
- **Amaç:** Somut sınıflarını belirtmeden bağlantılı ya da bağımlı olan nesneler grubunu yaratacak bir ara yüz sunmak.
- Yeni ürün desteği zayıftır, bu yüzden fazladan kod yazılması demektir.
- Somut sınıfların ayrıştırılmasını sağlar.
- İsimleri sadece yaratıldığı yerde geçerler.
- Uygulamalarda genelde tek bir factory olur yani Singleton durlar.

Abstract Factory Design Pattern UML diyagramı: 

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/abs_fac.png?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/abs_fac.png?raw=true)

Bu UML diyagramı, **Abstract Factory** tasarım desenini göstermektedir. Abstract Factory deseni, ilgili nesnelerin ailelerini, onların somut sınıflarını belirtmeden oluşturmak için kullanılan bir creational (yaratıcı) tasarım desenidir. Bu desen, çeşitli ürünlerin oluşturulmasını soyutlamak ve istemcinin (client) hangi somut sınıfları kullandığını bilmesini engellemek için kullanılır.

Diyagramın ana bileşenleri ve işlevleri şu şekildedir:

1. **AbstractFactory**:
    - Ürün ailesinin her bir türünü oluşturmak için soyut yöntemler tanımlar. Örnekte, `CreateProductA()` ve `CreateProductB()` yöntemleri bulunmaktadır.
2. **ConcreteFactory1 ve ConcreteFactory2**:
    - `AbstractFactory` arayüzünü uygularlar ve her biri belirli ürün ailesinin somut nesnelerini oluşturur.
    - `ConcreteFactory1`, `ProductA1` ve `ProductB1` nesnelerini oluşturur.
    - `ConcreteFactory2`, `ProductA2` ve `ProductB2` nesnelerini oluşturur.
3. **AbstractProductA ve AbstractProductB**:
    - Ürün ailesindeki her bir ürün türü için ortak bir ara yüz tanımlarlar.
    - Örnekte, `AbstractProductA` ve `AbstractProductB` ürün türleri bulunmaktadır.
4. **ProductA1, ProductA2, ProductB1 ve ProductB2**:
    - `AbstractProductA` ve `AbstractProductB` ara yüzlerini uygularlar ve belirli somut ürünleri temsil ederler.
    - `ProductA1` ve `ProductA2`, `AbstractProductA` ara yüzünü uygular.
    - `ProductB1` ve `ProductB2`, `AbstractProductB` ara yüzünü uygular.
5. **Client (İstemci)**:
    - Abstract Factory ve Abstract Product ara yüzlerini kullanarak ürün ailelerinin nesnelerini oluşturur ve kullanır.
    - İstemci, hangi somut sınıfın kullanıldığını bilmez; sadece soyut arayüzleri kullanır.

Günlük Hayattan Örnek:

Bir mobilya mağazası düşünün. Bu mağaza, farklı stillerde mobilyalar (modern, klasik) satıyor. Her stil, bir ürün ailesi (sandalye, masa) içerir.

- **AbstractFactory**: Mobilya Fabrikası
    - `CreateChair()`: Sandalye oluşturma metodu
    - `CreateTable()`: Masa oluşturma metodu
- **ConcreteFactory1**: Modern Mobilya Fabrikası
    - `CreateChair()`: Modern Sandalye oluşturur
    - `CreateTable()`: Modern Masa oluşturur
- **ConcreteFactory2**: Klasik Mobilya Fabrikası
    - `CreateChair()`: Klasik Sandalye oluşturur
    - `CreateTable()`: Klasik Masa oluşturur
- **AbstractProductA**: Sandalye ara yüzü
- **AbstractProductB**: Masa ara yüzü
- **ProductA1**: Modern Sandalye
- **ProductA2**: Klasik Sandalye
- **ProductB1**: Modern Masa
- **ProductB2**: Klasik Masa
- **Client**: Mobilya mağazası
    - Hangi tür mobilya (modern veya klasik) kullanılacağını belirler ve ilgili fabrika sınıfını kullanarak mobilya oluşturur.

Bu örnek, Abstract Factory deseninin nasıl çalıştığını ve farklı ürün ailelerinin nasıl oluşturulduğunu göstermektedir.

<aside>
🔑 Absract Factory design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Abstract_Factory) [](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)**ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Abstract_Factory
```

[Design-Patterns/Abstract_Factory at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Abstract_Factory)

---

---

### Singleton Design Pattern

- **Singleton**: Tekil, tekil kalıp anlamlarına gelmektedir.
- Nesne yaratımsal bir tasarım desenidir.
- Çok iş parçacıklıdır (multithreaded).
- Static Instance () { return uniqueInstance; }
- Static yapıdadır.
- **Amaç:** Bir sınıftan yalnızca bir nesnenin olması ve bu nesneye global erişim için bir nokta sağlanmasıdır.
- Yapılandırıcısı ⇒ `constructor` : `private` olarak tanımlanır.
- Genelde veri tabanı, konfigürasyon, logger vb. özel bilgileri içeren sınıflarda sadece bir noktadan erişim sağlamak gerektiğinden kullanılır.

Singleton Design Pattern UML diyagramı:

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/singleton.png?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/singleton.png?raw=true)

Bu desen iki temel öğe içerir:

1. **Singleton Sınıfı**: Bu sınıf kendi örneğini oluşturur ve ona bir erişim noktası sağlar.
2. **Client**: Singleton sınıfının örneğini kullanır.
- **Singleton**: Singleton sınıfı, kendi örneğini saklayan statik bir `instance` değişkeni içerir. Bu sınıfın `getInstance()` metodu, sınıfın tek örneğini döner. Eğer örnek henüz oluşturulmadıysa, `getInstance()` metodu tarafından oluşturulur.
- **Client**: Singleton sınıfının örneğine erişir ve onu kullanır.

🔑 Absract Factory design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Singleton) **ulaşabilirsiniz:

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Singleton
```

[Design-Patterns/Singleton at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Singleton)

---

---

### Adapter Design Pattern

- **Adapter:** Adaptör, uyarlayan anlamlarına gelmektedir.
- Diğer isimleri: Wrapper, sarmalayan, saran.
- **Amaç:** Bir sınıfın ara yüzünü, istemcilerin beklediği ara yüze dönüştürmek.
- Uyumsuzluk problemlerini önlemek için kullanılır.
- Hem sınıf hem de nesne yapısal bir tasarım desenidir.
- Adapter deseni, sınıfların birlikte çalışmasını sağlarken, var olan kodun değiştirilmesine gerek kalmadan, arayüzlerin uyumsuzluklarını giderir.

Adapter Design Pattern UML Diyagramı örneği:

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/adapter.jpg?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/adapter.jpg?raw=true)

Adapter deseninde dört ana bileşen bulunur:

1. **Client (İstemci)**: Adapt edilmiş arayüzü kullanarak çalışır.
2. **Target (Hedef)**: İstemcinin çalışmak istediği arayüz.
3. **Adaptee (Uyarlanan)**: Adapt edilmesi gereken mevcut sınıf.
4. **Adapter**: Adaptee'yi Target arayüzüne uyarlayan sınıf.
- Günlük hayat örneği:
    
    Bir şarj cihazı (Adapter) aracılığıyla bir cep telefonunu (Client) eski tip priz (Adaptee) ile şarj etmeyi örnek olarak verebiliriz. Hayatımızda fark etmeden en fazla kullandığımız yapılardan biridir Adapter ( dönüştürücü ) yapıları. 
    

<aside>
🔑 Adapter design pattern örneğine aşağıdaki [**linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Adapter) [](https://github.com/1omerozturk/Design-Patterns/tree/main/Iterator)**ulaşabilirsiniz:

</aside>

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Adapter
```

[Design-Patterns/Adapter at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Adapter)

---

---

### Observer Design Pattern

- **Observer**: Gözlemci, izelyici anlamlarına gelmektedir.
- Bilinen diğer isimleri: Dependents:bağımlılar, Publish-Subscribe: Yayınla-Abonel ol
- Nesne davranışsaldır.
- **Amaç:** Nesneler arasında birden-çoka ( one-to-many ) bağımlılık tanımla ve bir nesne durum değiştirdiğinde bağımlı olanların otomatik güncellenmesini sağlamaktır. ( Bildirim yapıları vs olabilir. )

Observer Design Pattern UML diyagramı:

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/observer.png?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/observer.png?raw=true)

Observer tasarım deseni dört ana bileşenden oluşur:

1. **Subject (Konu)**: Gözlemlenen nesnedir. Bir dizi gözlemciyi (observers) tutar ve durumu değiştiğinde onları bilgilendirir.
2. **Observer (Gözlemci)**: Subject'in durumundaki değişiklikler hakkında bilgilendirilen nesnedir.
3. **ConcreteSubject (Somut Konu)**: Subject arayüzünü uygular ve durumu saklar. ConcreteObserver nesnelerine bildirimler gönderir.
4. **ConcreteObserver (Somut Gözlemci)**: Observer arayüzünü uygular ve Subject'in durumunu senkronize eder.

UML Diyagramı Açıklaması

- **Subject**: Observer nesnelerini ekleme (`Attach`), çıkarma (`Detach`), ve bilgilendirme (`Notify`) işlevlerini tanımlar.
- **Observer**: Subject'in durum değişiklikleri hakkında bilgi almak için `Update` işlevini tanımlar.
- **ConcreteSubject**: Subject arayüzünü uygular ve durumu saklar. `GetState` işlevi ile durumu döner.
- **ConcreteObserver**: Observer arayüzünü uygular ve Subject'in durumunu senkronize eder. `Update` işlevi ile Subject'ten güncellenmiş durumu alır.

🔑 Observer design pattern örneğine aşağıdaki [linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Observer) ulaşabilirsiniz:

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Observer
```

[Design-Patterns/Observer at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Observer)

---

---

### Proxy Design Pattern

- **Proxy**: Vekil anlamına gelmektedir.
- Bilinen diğer isimleri: Surrogate
- Nesne yapısaldır.
- **Amaç:** Bir nesneye erişim kontrol etmek için o nesneye bir vekil nesne sağlamak.
- Proxy Design Pattern ⇒ ***Uzak Vekil**, **Sanal Vekil**, **Koruyucu Vekil***, ***Akıllı Referans***.

Proxy Design Pattern UML diyagramı:

![https://github.com/1omerozturk/Design-Patterns/blob/main/images/proxy.png?raw=true](https://github.com/1omerozturk/Design-Patterns/blob/main/images/proxy.png?raw=true)

Proxy deseninde üç ana bileşen bulunur:

1. **Subject**: Gerçek nesne ile proxy nesnesi arasındaki ortak arayüzdür.
2. **RealSubject**: Asıl işlevselliği gerçekleştiren gerçek nesnedir.
3. **Proxy**: Gerçek nesneye erişimi kontrol eden aracı nesnedir. RealSubject nesnesine referans tutar ve onun işlevselliğini çağırır.

**UML Diyagramı Açıklaması**

- **Client**: Subject arayüzünü kullanarak Proxy veya RealSubject nesnesine istekte bulunur.
- **Subject**: Ortak bir arayüzdür ve `Request` metodunu tanımlar.
- **RealSubject**: Subject arayüzünü uygular ve asıl işlevselliği gerçekleştiren nesnedir.
- **Proxy**: Subject arayüzünü uygular, RealSubject nesnesine bir referans tutar ve onun işlevselliğini kontrol eder.

Proxy Design pattern günlük hayat örneği:

Proxy tasarım deseni için güncel hayat örneği olarak "***banka hesabına erişim***" senaryosunu ele alalım. Banka hesabı gerçek nesne (RealSubject), müşteri temsilcisi proxy, ve müşteri ise client olarak düşünülebilir. Müşteri, müşteri temsilcisine (proxy) ulaşarak banka hesabındaki işlemleri gerçekleştirmek ister. Müşteri temsilcisi, müşterinin kimliğini doğrular ve uygun olduğu takdirde işlemi gerçekleştirmek için banka hesabına erişim sağlar.

🔑 Proxy design pattern örneğine aşağıdaki [linkten](https://github.com/1omerozturk/Design-Patterns/tree/main/Observer) ulaşabilirsiniz:

```bash
https://github.com/1omerozturk/Design-Patterns/tree/main/Proxy
```

[Design-Patterns/Proxy at main · 1omerozturk/Design-Patterns](https://github.com/1omerozturk/Design-Patterns/tree/main/Proxy)

---

---