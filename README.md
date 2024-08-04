# Coding Test

The main screen will be a list of articles ordered by date, showing the most recent articles first
(created_at).
- For each element in the list, the title (story_title), author (author), creation date
(created_at) and story url (story_url) must be shown.
- By default, filter any result that doesn’t have a story url (story_url is null)
- Provide an option (toggle) to include the results that doesn’t have a story url
- Provide an action (button) to view the details of the article in a modal view. These details
should include at least the title, comment text (comment_text) and tags
- The tags should be presented as chips (https://vuetifyjs.com/en/components/chips/)


## 💿 Install

Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |


## 💡 Usage

This section covers how to start the development server and build your project for production.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building for Production

To build your project for production, use:

```bash
pnpm build
```

Once the build process is completed, your application will be ready for deployment in a production environment.

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

