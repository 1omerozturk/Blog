# SOLID

Yazılım geliştirmenin temel taşlarından biri olan **SOLID prensipleri**, yazılımın daha **esnek, sürdürülebilir** ve **kolay anlaşılır** olmasını sağlar. Bu prensipler, her seviyede yazılım geliştiricinin mutlaka bilmesi ve gerekli yerlerde uygulanması gereken rehber kurallardır. Bu yazıda, SOLID prensiplerini günlük hayattan örneklerle açıklayarak, bu prensipleri neden bu kadar önemli olduğunu ve nasıl uygulanabileceğini anlatacağım.

## **S**ingle Responsibility Principle ⇒ ( SRP )

**Tek Sorumluluk Prensibi:** 

**Bir sınıfın sadece bir sorumluluğu olmalı, yani sadece bir iş yapmalıdır. Bu prensip, yazılımın daha kolay anlaşılabilir ve bakımı yapılabilir olmasını sağlar.** 

**Bu şekilde sınıfların küçük olması kodun daha rahat anlaşılır olmasını sağlar.**

***Örnek:*** 

Bir restoran düşünün. Restoranda garsonların görevi müşterilere servis yapmaktır. aşçıların görevi yemek pişirmek ve hazırlamaktır. Garsonlar yemek pişirme işini yapmaya kalkarsa  ya da aşçılar müşteri siparişlerini almaya başlarsa işler karışır ve verimlilik düşer. Herkes kendi işini yaptığında restoran daha verimli çalışır.

***Örnek Kod:***

```csharp
// Kötü örnek:
public class Kullanici
{
    public void VeriTabaninaKaydet()
    {
        // Veritabanına kaydetme işlemleri
    }

    public void EkranaYazdir()
    {
        // Ekrana yazdırma işlemleri
    }
}

// İyi örnek:
public class Kullanici
{
    public string Ad { get; set; }
    public string Soyad { get; set; }
}

public class KullaniciVeriErisimi
{
    public void Kaydet(Kullanici kullanici)
    {
        // Veritabanına kaydetme işlemleri
    }
}
```

## Open/Closed Principle ⇒ ( OCP )

**Açık/Kapalı Prensibi:**

**Bir sınıf, genişlemeye açık, değişikliğe kapalı olmalıdır. Yani yeni özellikler eklenebilirken, mevcut kodun bozulmaması sağlanmalıdır.** 

**Yani örnek olarak bir Hesap.class adlı sınıfınızı değiştirmek yerine ondan kalıtıma alarak YeniHesap.class sınıfını oluşturmak ve içindeki kodu override etmek.**

***Örnek:***

Bir elbise dolabı, yeni kıyafetler eklemek için açıkken, dolabın yapısında bir değişiklik veya bozulma olmadan yapılabilmesidir. Yazılımda da benzer şekilde, yeni bir ödeme yöntemi eklemek için mevcut ödeme sisteminin tümünü değiştirmek yerine, yeni bir ödeme sınıfı eklemek yeterli olacaktır.

 ***Örnek Kod:***

```csharp
// Kötü örnek:
public class OdemeIslemi
{
    public void OdemeAl(string odemeTipi)
    {
        if (odemeTipi == "KrediKarti")
        {
            // Kredi kartı ile ödeme işlemleri
        }
        else if (odemeTipi == "Nakit")
        {
            // Nakit ödeme işlemleri
        }
        // ...
    }
}

// İyi örnek:
public interface IOdeme
{
    void OdemeAl();
}

public class KrediKartiOdeme : IOdeme
{
    public void OdemeAl()
    {
        // Kredi kartı ile ödeme işlemleri
    }
}

public class NakitOdeme : IOdeme
{
    public void OdemeAl()
    {
        // Nakit ödeme işlemleri
    }
}
```

## Liskov’s Substitution Principle ⇒ ( LSP )

**Liskov Yerine Koyma Prensibi:**

**Bir türetilmiş sınıf, temel sınıfın yerine geçebilmeli ve temel sınıfın tüm davranışlarını korumalıdır. Invariants, Post-conditions ve Pre-conditions kavramları ile ilgilidir.**

1. **Invariants ( *Değişmezler* ):** Sınıfın her durumda doğru kalması gereken özellikleridir. Türetilmiş sınıflar, temel sınıfların değişmezlerini korumalıdır.
2. **Post-conditions ( *Son-koşullar* ):** Bir metodun çalışması sonrasında doğru olması gereken koşullardır. Türetilmiş sınıflar, temel sınıfın son koşullarını zayıflatmamalıdır.
3. **Pre-conditions ( *Ön-koşullar* ):** Bir metodun çalışması sırasında doğru olması gereken koşullardır. Türetilmiş sınıflar, temel sınıfın ön koşullarını gülendirmemelidir.

Bu kavramlar, türetilmiş sınıfların temel sınıflarla uyumlu olmasını sağlar.

***Örnek:***

Bir kafede espresso ve cappuccino servisi yapılıyor. Eğer cappuccino makinesi bozulursa, espresso makinesi de cappuccino yapabiliyor olmalı. Yani, espresso makinesi cappuccino makinesinin yerine geçebilmeli.

***Örnek Kod:***

```csharp
// Kötü örnek:
public class Kare
{
    public int KenarUzunlugu { get; set; }
    public int AlanHesapla()
    {
        return KenarUzunlugu * KenarUzunlugu;
    }
}

public class Dikdortgen : Kare
{
    public int Genislik { get; set; }
    public int Yukseklik { get; set; }
    // Dikdörtgen için alan hesaplaması farklı olmalı
}
```

## Interface Segregation Principle ⇒ ( ISP )

**Arayüz Ayrımı Prensibi:**

**Bir sınıf, kullanmadığı metodları içeren ara yüzleri uygulamaya zorlanmamalıdır. Bu sayede kullanılan kodların ihtiyaçlarından fazlasına ulaşmasını engellemek, okunabilirliği ve bakım kolaylığını arttırmak için sunulan bir prensip olur.** 

**Bir sınıfın işlevleri tutarlı ve ufak ara yüzler ile bölünür.**

***Örnek:***

Bir spor salonu düşünün. Isınma dersler için bir eğitmen ve ağırlık antrenmanları için başka bir eğitmen var. Isınma eğitmenine ağırlık antrenmanları yaptırmak verimsiz olacaktır aynı şekilde ağırlık eğitmenine yoga dersleri verdirmek de öyle. 

***Örnek Kod:***

```csharp
// Kötü örnek:
public interface IYazici
{
    void Yazdir();
    void FaksGonder();
    void Tara();
}

// İyi örnek:
public interface IYazdirma
{
    void Yazdir();
}

public interface IFaks
{
    void FaksGonder();
}
```

## Dependency Inversion / Injection Principle ⇒ ( DIP )

**Bağımlılıkların Tersine Çevirilmesi Prensibi:**

**Yüksek seviyeli modüller, düşük seviyeli modüllere bağlı olmamalıdır. Her ikisi de soyutlamalara bağlı olmalıdır. Yani bağımlı olunan sınıfların oluşturulması değil de istenilmesi şeklinde çalışan bir prensiptir.**

***Örnek:***

Bir restoran düşünün. Restoranın yönetim sistemi ( yükesek seviyeli modül ) farklı ödeme sistemleriyle ( düşük seviyeli modüller ) çalışabilmelidir. Restoran yönetim sistemi, belirli bir ödeme sistemiyle sınırlı olmamalı, farklı ödeme sistemleriyle de çalışabilecek şekilde tasarlanmalıdır.

***Örnek Kod:***

```csharp
// Kötü örnek:
public class VeriTabaniBaglantisi
{
    public void VeriGetir()
    {
        // Veritabanından veri getirme işlemleri
    }
}

// İyi örnek:
public interface IVeriErisimi
{
    void VeriGetir();
}

public class VeriTabaniBaglantisi : IVeriErisimi
{
    public void VeriGetir()
    {
        // Veritabanından veri getirme işlemleri
    }
}
```

Bu içerikle beraber **SOLID** prensiplerinin anlaşılması ve C# ile nasıl uygulanabileceği hakkında genel bir öğretici bilgiler sunmayı amaçladım. 

### Unutmayalım!!!

**SOLİD** prensipleri, yazılım geliştirmede bir kılavuzdur. Her zaman en iyi çözüm olmayabilir ve bazı durumlarda esneklik göstermeniz gerekebilir. Ancak bu prensiplere bağlı kalmak, uzun vadede daha sürdürülebilir ve bakımı kolay yazılımlar geliştirmenize yardımcı olacaktır.