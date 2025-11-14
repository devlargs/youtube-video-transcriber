export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-12 px-4 py-16 sm:px-8">
        <header className="space-y-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Youtube Video Transcriber
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] text-zinc-950">
            Drop a link or upload your video to get an instant transcript.
          </h1>
          <p className="text-base text-zinc-600">
            Paste a YouTube URL or upload an audio/video file. We handle the rest.
          </p>
        </header>

        <form
          className="space-y-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
          noValidate
        >
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-zinc-800"
              htmlFor="youtube-url"
            >
              YouTube URL
            </label>
            <textarea
              id="youtube-url"
              name="youtube-url"
              rows={5}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-base text-zinc-900 shadow-inner transition focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
              OR
            </span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-zinc-800"
              htmlFor="media-upload"
            >
              Upload audio or video
            </label>
            <input
              id="media-upload"
              name="media-upload"
              type="file"
              accept="audio/*,video/*"
              className="block w-full cursor-pointer rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-4 text-sm text-zinc-600 transition hover:border-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
            />
            <p className="text-xs text-zinc-500">
              Max size 500MB. Formats: MP3, MP4, WAV, MOV.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-zinc-900 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900"
          >
            Generate Transcript
          </button>
        </form>
      </main>
    </div>
  );
}
