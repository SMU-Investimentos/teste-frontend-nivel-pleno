/*
 * Essa classe representa um componente de tabs.
 *
 * Uma tab ativa possui a classe `active`. Só pode haver uma tab ativa.
 * Toda tab possui um atributo `data-target` que corresponde ao conteúdo daquela tab. Só pode haver um conteúdo ativo.
 *
 * O exercício é o seguinte:
 *
 * Assim que o DOM estiver pronto para ser manipulado, criar uma instância da classe Tabs.
 * Ao clicar na tab, ela deve ser setada como ativa e mostrar o conteúdo correspondente àquela tab.
 *
 * Regras:
 * - Não é permitido o uso de nenhuma biblioteca.
 *
 * Objetivos:
 * - Atestar a proeficiência do candidato em Javascript nativo e manipulação do DOM.
 *
 */
class Tabs {
  id;
  $rootElement;

  constructor(id) {
    this.id = id;
    this.$rootElement = document.getElementById(id);

    this.bindListeners(this.$rootElement)
  }

  bindListeners(tabsComponent) {
    const tabs = tabsComponent.getElementsByClassName('tab')

    for (let tab of tabs) {
      tab.addEventListener('click', (e) => this.onTabClick(tab))
    }

  }

  onTabClick(newActiveTab) {
    const currentActiveTab = this.$rootElement.getElementsByClassName('tab active')[0]
    currentActiveTab.classList.remove('active')

    const currentActiveContent = this.$rootElement.getElementsByClassName('tab-content active')[0]
    currentActiveContent.classList.remove('active')

    const newActiveContent = document.getElementById(newActiveTab.dataset.target)

    newActiveTab.classList.add('active')
    newActiveContent.classList.add('active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = new Tabs('my-tabs')
})

