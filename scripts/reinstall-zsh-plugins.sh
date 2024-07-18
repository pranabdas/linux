mv ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions.bak
mv ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting.bak
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
rm -rf ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions.bak
rm -rf ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting.bak
