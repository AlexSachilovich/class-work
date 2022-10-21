class App extends HTMLElement {
  constructor() {
    super();
    this.data = [
      {
        id: 1,
        title: "TV SAMSUNG UE43RU7100UXRU",
        preview: "./img/1.jpeg",
        description:
          "55 3840x2160 4K UHD, матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 3100, Smart TV Samsung Tizen, HDR, Wi-Fi",
        price: 3100,
      },
      {
        id: 2,
        title: "Sony PlayStation 5",
        preview: "./img/2.jpeg",
        description:
          "825 ГБ, разрешение игр - 4K UHD (2160p), поддержка HDR, 1 игра в комплекте: Astros Playroom",
        price: 2300,
      },
      {
        id: 3,
        title: "Apple iPhone 11 64GB",
        preview: "./img/3.jpeg",
        description:
          "Apple iOS, экран 6.1 IPS 828x1792, Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM, влагозащита IP68",
        price: 1625,
      },
      {
        id: 4,
        title: "Электросамокат White Siberia WS-Luna 800W",
        preview: "./img/4.jpeg",
        description:
          "взрослый/подростковый макс. 140 кг, до 50 км/ч, мощность 800 Вт, запас хода 45 км, аккумулятор 18 А·ч, задний привод, колеса 10/10, вес 23.5 кг",
        price: 2150,
      },
      {
        id: 5,
        title: "Xiaomi Smart Band 7",
        preview: "./img/5.jpeg",
        description:
          "фитнес-браслет, поддержка Android/iOS, экран AMOLED 1.62 (192x490, сенсорный), шагомер, пульсометр, время работы: 2 недели, корпус: пластик, браслет: силикон",
        price: 130,
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "It works!!!";
  }
}

customElements.define("it-app", App);
