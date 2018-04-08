const { Message } = require('.');

class Release extends Message {
  constructor({ release, repository }) {
    super({
      footer: `<${repository.html_url}|${repository.full_name}>`,
    });
    this.release = release;
    this.releaseBody = this.release.body; // TODO shorten this
    this.repository = repository;
  }

  getCore() {
    const branch = `\`${this.release.target_commitish}\``;
    return {
      fallback: `${this.repository.full_name} ${this.release.name} released`,
      text: `${this.repository.full_name} <${this.release.html_url}|${this.release.name}> released from ${branch}`,
    };
  }

  toJSON() {
    return {
      attachments: [
        {
          ...super.getBaseMessage(),
          ...this.getCore(),
          mrkdwn_in: ['text'],
        },
      ],
    };
  }
}

module.exports = {
  Release,
};
