class Dom {
  constructor() {
    // this.form = document.querySelector('.ui.form')
    this.issues = document.querySelector('#allissues');
    this.issuesContainer = document.querySelector('div.ui.stackable.grid.container');
    this.rightMenu = document.querySelector('div.ui.right.fixed.vertical.menu');
    console.log('form')
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('handling submit')

    const title = this.form.querySelector('#issuetitle').value
    const description = this.form.querySelector('#issuedescription').value
    const zipcode = this.form.querySelector('#issuezipcode').value
    const category = this.form.querySelector('#issuecategory').value

    this.form.querySelector('#issuetitle').value = ''
    this.form.querySelector('#issuedescription').value = ''
    this.form.querySelector('#issuezipcode').value = ''
    this.form.querySelector('#issuecategory').value = 'Category'

    issueAdapter.create({title: title, description: description, zipcode: zipcode, category:category})
    .then(response => {
      console.log(response)
      new Issue(response)
    }).catch(error => {
      console.log('in the catch');
      const errorDiv = document.createElement('div')
      errorDiv.innerHTML = `
        <h1 class="header">That issue can not be posted.</h1>
      `
      this.form.appendChild(errorDiv)
    })
  }

  seeAllIssues() {
    // e.preventDefault()
    console.log('handling all issues')
    issueAdapter.fetch()
    .then(issues => {
      issues.forEach(issue => {
        new Issue(issue)
      })
      Issue.renderAll(this.issuesContainer);
    })
  }

  handleVote(e) {
    switch(e.target.innerText) {
      case 'Upvote':
        issueAdapter.upvote({id: e.target.dataset.id})
        .then(issue => {
          e.target.parentNode.parentElement.firstElementChild.innerText = issue.votes
        })
        break;
      case 'Downvote':
        issueAdapter.downvote({id: e.target.dataset.id})
        .then(issue => {
          e.target.parentNode.parentElement.firstElementChild.innerText = issue.votes
        })
        break;
      default:
        console.log('click something else')
    }
  }

  handleRightMenu(e) {
    switch(e.target.innerText) {
      case 'Submit New Issue':
        console.log('new issue')
        // ADD LOGIC HERE
        break;
      case 'Refresh':
        console.log('refresh')
        // this.issuesContainer.innerHTML = ''
        // this.seeAllIssues()
        break;
      default:
      console.log('click something else');
    }
  }

  addAllEventListeners() {
    console.log('adding listeners')
    // this.form.addEventListener('submit', this.handleSubmit.bind(this))
    this.issues.addEventListener('click', this.seeAllIssues.bind(this))
    this.issuesContainer.addEventListener('click', this.handleVote.bind(this))
    this.rightMenu.addEventListener('click', this.handleRightMenu.bind(this))
  }

}
