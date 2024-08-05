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

To install the project dependencies, use the command corresponding to the package manager:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |


## 💡 Usage

### Starting the Development Server

To start the development server with hot-reload, run: 

```bash
pnpm dev
```
The server will be accessible at [http://localhost:3000](http://localhost:3000):


### Building for Production

To build the project for production, use:

```bash
pnpm build
```

Once the build process is complete, the application will be ready for deployment.

