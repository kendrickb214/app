from git import Repo

# Initialize the GitPython Repo object with the current working directory
repo = Repo('path/to/repo')

# Fetch the latest changes from the remote repository
repo.git.fetch()

# Get the commit object for the latest commit on the origin/develop branch
commit = repo.commit('origin/develop~0')

# Get the blob object for the file 'foo' in the commit
blob = commit.tree / 'foo'

# Get the contents of the blob as a string
foo_contents = blob.data_stream.read().decode('utf-8')

print(foo_contents)
