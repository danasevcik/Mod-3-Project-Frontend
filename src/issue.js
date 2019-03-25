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
}

Issue.all = [];