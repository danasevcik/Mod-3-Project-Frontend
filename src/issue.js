class Issue {
  constructor({id, title, location, votes, category, description, createdDate, resolved}) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.votes = votes;
    this.category = category;
    this.description = description;
    this.createdDate = createdDate;
    this.resolved = resolved;
    this.constructor.all.push(this);
  }

  toHTML() {
    const div = document.createElement('div')
    div.innerHTML = `
      <p>${this.title}</p>
    `

    return div
  }

  render(domNode) {
    domNode.appendChild(this.toHTML())
  }

  static renderAll(domNode) {
    domNode.innerHTML = ''

    this.all.forEach(issue => {
      issue.render(domNode)
    })
  }

}

Issue.all = [];
